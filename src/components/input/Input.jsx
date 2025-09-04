import ErrorMessage from "@/components/error/ErrorMessage";

export default function Input({ label, type = "text", placeholder, error }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
}
