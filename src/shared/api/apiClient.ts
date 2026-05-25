/**
 * src/shared/api/apiClient.ts
 * * Core API Client utilizing native fetch.
 * Acts as the single source of truth for network requests, 
 * centralizing base URL configuration, headers, and error handling.
 */

const API_BASE_URL =  import.meta.env.VITE_API_URL 

/**
 * Extended RequestInit interface to allow passing raw objects as body
 * which will be automatically stringified by the client.
 */
interface RequestOptions extends RequestInit {
    body?: any; 
}

/**
 * Generic core fetch wrapper.
 * @param endpoint - The API route (e.g., '/api-resplandor/projects')
 * @param options - Standard fetch options plus an optional raw object body
 * @returns A Promise resolving to the expected generic type <T>
 */
async function fetchClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = 'GET', headers, body, ...restOptions } = options;

    // 1. Configure default headers
    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers, // Allows overriding default headers if needed
        },
        ...restOptions,
    };

    // 2. Automatically stringify JSON payloads if a body object is provided
    if (body && typeof body !== 'string') {
        config.body = JSON.stringify(body);
    }

    try {
        // 3. Execute the network request
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

        // 4. Parse the JSON response
        const data = await response.json();

        // 5. Intercept HTTP error statuses (4xx, 5xx)
        if (!response.ok) {
            // Our backend sends { status: 'error', message: '...' }
            // We throw the backend's message, or fallback to a generic status text
            throw new Error(data.message || `HTTP Error: ${response.status} ${response.statusText}`);
        }

        // 6. Return the raw parsed data to the Service layer
        return data as T;
        
    } catch (error) {
        // Log the error globally for debugging, then propagate it to TanStack Query
        console.error(`[API Client Error] ${method} ${endpoint}:`, error);
        throw error;
    }
}

/**
 * Exported API Client methods representing the CRUD operations.
 * These methods provide a cleaner API for the Service layer.
 */
export const apiClient = {
    get: <T>(endpoint: string, options?: RequestInit) => 
        fetchClient<T>(endpoint, { ...options, method: 'GET' }),
        
    post: <T>(endpoint: string, body: any, options?: RequestInit) => 
        fetchClient<T>(endpoint, { ...options, body, method: 'POST' }),
        
    patch: <T>(endpoint: string, body: any, options?: RequestInit) => 
        fetchClient<T>(endpoint, { ...options, body, method: 'PATCH' }),
        
    delete: <T>(endpoint: string, options?: RequestInit) => 
        fetchClient<T>(endpoint, { ...options, method: 'DELETE' }),
};