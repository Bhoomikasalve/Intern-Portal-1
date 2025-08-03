function Login({ onLogin }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card bg-white p-6 rounded shadow-md w-[520px]">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="input block w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="input block w-full mb-3 p-2 border rounded"
        /> 
        <button
          onClick={onLogin}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
