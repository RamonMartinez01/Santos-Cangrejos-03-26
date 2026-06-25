/**
 * src/shared/api/apiClient.ts
 * * Core API Client utilizing native fetch.
 * Acts as the single source of truth for network requests, 
 * centralizing base URL configuration, headers, and error handling.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL

/**
 * Extended Request options interface.
 * We Omit the native 'body' from RequestInit to allow passing raw objects,
 * which will be automatically formatted by the client.
 */
interface RequestOptions extends Omit<RequestInit, 'body'> {
    body?: unknown; 
}

/**
 * Generic core fetch wrapper.
 * @param endpoint - The API route (e.g., '/api-resplandor/projects')
 * @param options - Standard fetch options plus an optional raw object body
 * @returns A Promise resolving to the expected generic type <T>
 */
async function fetchClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = 'GET', headers, body, ...restOptions } = options;

    const config: RequestInit = {
        method,
        headers: { ...headers },
        ...restOptions,
    };

    // 1. Smart Body Formatting & Headers
    // Si hay un body, no es una cadena y tampoco es FormData (para cuando subas imágenes)
    if (body && typeof body !== 'string' && !(body instanceof FormData)) {
        config.body = JSON.stringify(body);
        // Solo forzamos JSON si estamos enviando un objeto estándar
        config.headers = {
            'Content-Type': 'application/json',
            ...config.headers
        };
    } else if (body instanceof FormData) {
        config.body = body;
        // El navegador se encarga del Content-Type para FormData
    }

    try {
        // 2. Execute the network request
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        // 3. Safe Parsing: Check what the server actually sent back
        let data: any;
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            // Fallback for HTML error pages from proxies like Nginx
            data = await response.text();
        }

        // 4. Intercept HTTP error statuses (4xx, 5xx)
        if (!response.ok) {
            // Extract message safely whether data is a JSON object or raw HTML text
            const errorMessage = typeof data === 'object' && data?.message
                ? data.message
                : `HTTP Error: ${response.status} ${response.statusText}`;
            throw new Error(errorMessage);
        }

        // 5. Return the successfully parsed data
        return data as T;

    } catch (error) {
        console.error(`[API Client Error] ${method} ${endpoint}:`, error);
        throw error;
    }
}

/**
 * Exported API Client methods representing the CRUD operations.
 */
export const apiClient = {
    get: <T>(endpoint: string, options?: RequestOptions) => 
        fetchClient<T>(endpoint, { ...options, method: 'GET' }),
        
    post: <T>(endpoint: string, body: unknown, options?: RequestOptions) => 
        fetchClient<T>(endpoint, { ...options, body, method: 'POST' }),
        
    patch: <T>(endpoint: string, body: unknown, options?: RequestOptions) => 
        fetchClient<T>(endpoint, { ...options, body, method: 'PATCH' }),
        
    delete: <T>(endpoint: string, options?: RequestOptions) => 
        fetchClient<T>(endpoint, { ...options, method: 'DELETE' }),
};