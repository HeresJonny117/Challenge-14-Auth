import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin): Promise<string | null> => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    const token = data.token;

    // Store the token in localStorage
    if (token) {
      localStorage.setItem("token", token);
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Login failed:", error);
    return null;
  }
};




export { login };
