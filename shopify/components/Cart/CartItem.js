import React from "react";
import { Plus, Minus, Trash2 } from "lucide-react";

const CartItem = ({ product, onRemove, onQuantityUpdate }) => {
  return (
    <div className="flex items-center gap-2 border-b py-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => onQuantityUpdate(product.id, -1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => onQuantityUpdate(product.id, 1)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={() => onRemove(product.id)}
            className="p-1 hover:bg-gray-100 rounded ml-2"
          >
            <Trash2 className="w-4 h-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
