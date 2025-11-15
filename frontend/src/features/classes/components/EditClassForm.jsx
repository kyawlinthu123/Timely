import { useContext, useState, useEffect } from "react";
import { ClassesContext } from "../context/ClassesContext";
import toast from "react-hot-toast";

export default function EditClassForm({myClass,setShowEditForm}) {
  const [classTitle, setClassTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  
  const { updateClass } = useContext(ClassesContext);

  // Populate form with existing class data
  useEffect(() => {
    if (myClass) {
      setClassTitle(myClass.classTitle || "");
      setInstructor(myClass.instructor || "");
      setDescription(myClass.description || "");
    }
  }, [myClass]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedClass = {
      ...myClass,
      classTitle,
      instructor,
      description
    };
    try {
      await updateClass(myClass._id, updatedClass);
      toast.success(`"${myClass.classTitle}" has been updated.`)
      setShowEditForm(false);
    } catch (error) {
      console.error("Error updating class:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" key={myClass._id}>
      <form
        className="w-full max-w-md p-6 space-y-5 text-black bg-white shadow-xl rounded-xl"
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Edit Class
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Update the details for your class
          </p>
        </div>

        {/* Class Title */}
        <div>
          <label
            htmlFor="class-name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="text"
            id="class-name"
            value={classTitle}
            onChange={(event) => setClassTitle(event.target.value)}
            placeholder="e.g., Biology 101"
            className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Instructor */}
        <div>
          <label
            htmlFor="instructor"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Instructor <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            id="instructor"
            value={instructor}
            onChange={(event) => setInstructor(event.target.value)}
            placeholder="e.g., Dr. Smith"
            className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Description <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Add notes or details about this class..."
            className="w-full px-3 py-2 text-sm transition-all border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={() => setShowEditForm(false)}
            className="px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 active:scale-95"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-600 active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}