function CheckBox() {
  return (
    <div className="flex gap-2">
      <input type="checkbox" className="cursor-pointer" />
      <label className="font-semibold text-sm">Show Premium Only</label>
    </div>
  );
}

export default CheckBox;
