export default function Project2Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-medium text-gray-200">Cartoon Shader</h1>
        <div className="text-gray-400">
          <p>Modelling objects and coloring them with cartoon shader.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Add project details here */}
          <img src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/a0fc2f8f-c051-45b2-be66-1af75ae39598/Wnad+Demo+GIF.gif?format=1500w" />
          <img src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/0b1c1a89-d066-4e5b-a24d-c52aef444a33/Cake+Demo+GIF.gif?format=750w" />
        </div>
      </div>
    </div>
  );
}
