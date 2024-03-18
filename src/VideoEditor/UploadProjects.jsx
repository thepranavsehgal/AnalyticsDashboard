import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const FileUploadPage = () => {
  // State to store uploaded file
  const [file, setFile] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    // Add your file upload logic here
  };

  // Function to handle opening project
  const handleOpenProject = (projectId) => {
    // Add your logic to open the project
  };

  // Function to handle deleting project
  const handleDeleteProject = (projectId) => {
    // Add your logic to delete the project
  };

  // Dummy data for existing projects (replace with actual data)
  const existingProjects = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upload Your Video</h1>
      <h6 className="text-sm font-semibold mb-8">File should not be More than 10MB</h6>

      {/* File Upload Section */}
      <div className="mb-8">
        <input
          type="file"
          accept=".mp4"
          onChange={handleFileUpload}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      {/* Existing Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
        {existingProjects.map((project) => (
          <div key={project.id} className="flex justify-between items-center border-b border-gray-300 py-4">
            <div>
              <span className="font-semibold">{project.name}</span>
            </div>
            <div>
              <Link to= "/editorpage">
              <button
                onClick={() => handleOpenProject(project.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Open
              </button>
              </Link>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadPage;
