import { useState, useRef, useEffect } from 'react';
import { Edit2 } from 'lucide-react';

interface InlineEditProps {
  value: string;
  onSave: (value: string) => void;
  className?: string;
  isEnabled: boolean;
  multiline?: boolean;
}

export default function InlineEdit({
  value,
  onSave,
  className = '',
  isEnabled,
  multiline = false
}: InlineEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editValue.trim() !== '') {
      onSave(editValue);
    } else {
      setEditValue(value);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(value);
      setIsEditing(false);
    }
  };

  if (!isEnabled) {
    return <span className={className}>{value}</span>;
  }

  if (isEditing) {
    return multiline ? (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={`${className} border-2 border-blue-500 rounded px-2 py-1 outline-none`}
        rows={3}
      />
    ) : (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={`${className} border-2 border-blue-500 rounded px-2 py-1 outline-none`}
      />
    );
  }

  return (
    <span
      onClick={() => setIsEditing(true)}
      className={`${className} cursor-pointer hover:bg-blue-50 rounded px-2 py-1 inline-flex items-center group relative`}
    >
      {value}
      <Edit2 className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
    </span>
  );
}
