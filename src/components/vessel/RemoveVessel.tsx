import React from "react";

interface RemoveVesselProps {
  onCancel: () => void;
  onSave: () => void;
}

const RemoveVessel: React.FC<RemoveVesselProps> = ({ onCancel, onSave }) => {
  return <div>RemoveVessel</div>;
};

export default RemoveVessel;
