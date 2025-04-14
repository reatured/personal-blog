export default function Project3Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h1 className="text-2xl font-medium text-gray-200">Teddy Pear</h1>
        <div className="text-gray-400">
          <p>
            This teddy bear model was created after a real-life teddy bear toy.
            To achieve a realistic appearance, I utilized Blender's particle
            system to simulate the bear's hair. This allowed for a detailed and
            lifelike representation of the bear's fur, adding depth and texture
            to the model.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-medium text-gray-300">Project Details</h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
          <div className="w-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590806202203-0KVBKWYEMEAY48QHPSGH/Bear+Image+7.png?format=1500w"
              alt="Bear Image 7"
              className="w-full"
            />
          </div>
          <div className="w-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590806167160-XGI45U71W9BGC7OV7O67/Bear+Image+6.png?format=1500w"
              alt="Bear Image 6"
              className="w-full"
            />
          </div>
          <div className="w-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590818457373-MPOBKCPKX2OPC9U0C9AT/Bear+Image+5.png?format=1500w"
              alt="Bear Image 5"
              className="w-full"
            />
          </div>
          <div className="w-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5df7337598a1771a4a73ef26/1590818049717-HF3QKWQ0GMXIEXGAP2G4/Bear+Image+8.png?format=1500w"
              alt="Bear Image 8"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
