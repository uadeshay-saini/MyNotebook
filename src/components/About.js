import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NBG from './NBG.jpg'
const About = () => {
    const a = useContext(NoteContext);

  return (
    <div  className="w-full  bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>
 <div className=" p-8">
      <div className="max-w-4xl mx-auto text-left">
        <h1 className="text-5xl text-gray-400 font-bold mb-6">About MyNotebook</h1>
        <p className="text-lg text-gray-400 leading-loose">
          MyNotebook is a powerful and secure digital space designed for organizing your ideas, thoughts, and important notes. Whether you're a student, professional, or creative mind, MyNotebook provides an intuitive platform to keep your thoughts in one place.
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          With a user-friendly interface and advanced features, MyNotebook allows you to effortlessly create, edit, and access your notes from anywhere. Stay organized and boost your productivity with our seamless note-taking app.
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>Key Features:</strong>
          <br/>
          <ul className="list-disc pl-6 mt-2">
            <li>Effortless note creation and editing</li>
            <li>Tagging system for easy categorization</li>
            <li>Secure and reliable cloud storage</li>
            <li>Access notes from any device</li>
            <li>User-friendly interface for a smooth experience</li>
          </ul>
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>Our Mission:</strong>
          <br/>
          At MyNotebook, our mission is to empower individuals to capture and organize their thoughts seamlessly. We believe in providing a secure and efficient platform for users to express their creativity and boost productivity.
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>User Testimonials:</strong>
          <br/>
          See what our early users are saying about MyNotebook.
          {/* Include user quotes or testimonials here */}
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>Future Roadmap: </strong>
          <br/>
          Exciting developments are in store for MyNotebook. Stay tuned for upcoming features, improvements, and expansions as we continuously enhance the app to meet your needs.
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>Privacy and Security:</strong>
          <br/>
          Your privacy is our priority. MyNotebook employs state-of-the-art security measures to protect your data and ensure a safe note-taking environment.
        </p>
        <p className="text-lg text-gray-400 leading-loose mt-4">
          <strong>Technologies Used:</strong>
          <br/>
          MyNotebook is built with cutting-edge technologies, including React, Node.js, MongoDB, Express.js, bcrypt for secure salting and hashing, and the Context API for efficient state management.
        </p>
      </div>
    </div>

    </div>

  )
}

export default About


