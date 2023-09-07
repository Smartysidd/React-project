import React from 'react';

const Courses = () => {
  // Dummy data for courses (you can replace this with actual data)
  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Doe',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      instructor: 'Jane Smith',
      duration: '6 weeks',
    },
    {
      id: 3,
      title: 'React.js Crash Course',
      instructor: 'Bob Johnson',
      duration: '4 weeks',
    },
  ];

  return (
    <div className="courses-container">
      <h2>Our Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;