/**
 * @param {string} endpoint 
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} method 
 * @param {JSON | FormData} data 
 * @returns 
 */
const httpClient = async(endpoint, method, data =  null) => {
    const baseUrl = "https://buigghlsgthlyorwmphi.supabase.co"
  
    const headers = {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1aWdnaGxzZ3RobHlvcndtcGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MjkzNTQsImV4cCI6MjAxMjAwNTM1NH0.2NtXZeZgjN2-JG7ndnzAWY8mlviJe84LuG1IHE3NrA4",
    }
    if (method === "POST" || method === "PATCH") {
      headers.Prefer = "return=representation"
      headers["Content-Type"] = "application/json"
    }
  
    if (data) {
      return await fetch(baseUrl + endpoint, {
        method,
        headers,
        body: JSON.stringify(data)
      })
    }
  
    return await fetch(baseUrl + endpoint, {
      method,
      headers
    })
  }
  
  export default httpClient