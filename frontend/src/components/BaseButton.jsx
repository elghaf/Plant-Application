export function BaseButton({ textValue, onClickFunction }) {
    return (
      <div className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={onClickFunction}>
        {textValue}
      </div>
    );
  }
  