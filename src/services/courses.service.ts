import { Course } from './../interfaces/course.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor() {  this.filteredCourses = this.courses_data;}

  courses_data: Course[] = [

    {
      course_id: 101,
      title: 'Introduction to Scratch Programming',
      description: 'A beginner-friendly course that introduces kids to programming through Scratch.',
      difficulty: 'Beginner',
      duration: '3 weeks',
      author: 'Fatima Nabil',
      category: 'gaming',
      num_of_videos: 15,
      photo: '../../assets/coursesphoto/new.png',
      price: 30,
      videos: ['', '']
    },
    {
      course_id: 102,
      title: 'Building Games with Scratch',
      description: 'Create simple games using Scratch and enhance creativity while learning game development.',
      difficulty: 'Intermediate',
      duration: '4 weeks',
      author: 'Ahmed Samir',
      category: 'gaming',
      num_of_videos: 88,
      photo: '../../assets/coursesphoto/gaming2.png',
      price: 60,
      videos: ['', '']
    },
    {
      course_id: 103,
      title: 'Game Development with Python',
      description: 'Build your own 2D games using Python. Learn game loops and sprite movements.',
      difficulty: 'Intermediate',
      duration: '7 weeks',
      author: 'Sara Abdelrahman',
      category: 'gaming',
      num_of_videos: 70,
      photo: '../../assets/coursesphoto/gaming5.jpg',
      price: 33,
      videos: ['', '']
    },
    {
      course_id: 104,
      title: '3D Animation with Alice',
      description: 'Create animated 3D stories using Alice and spark creativity in a visual environment.',
      difficulty: 'Beginner',
      duration: '4 weeks',
      author: 'Layla Ibrahim',
      category: 'gaming',
      num_of_videos: 120,
      photo: '../../assets/coursesphoto/Rectangle 25.png',
      price: 57,
      videos: ['', '']
    },
    {
      course_id: 105,
      title: 'Coding for Kids: Learn Java with Minecraft',
      description: 'Learn Java programming by modifying Minecraft.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Nour El-Din',
      category: 'gaming',
      num_of_videos: 90,
      photo: '../../assets/coursesphoto/Rectangle 50.png',
      price: 43,
      videos: ['', '']
    },
    {
      course_id: 106,
      title: 'Advanced Game Development with Unity',
      description: 'Master game development in Unity and create complex 3D games.',
      difficulty: 'Advanced',
      duration: '10 weeks',
      author: 'Mina Farag',
      category: 'gaming',
      num_of_videos: 100,
      photo: '../../assets/coursesphoto/game.jfif',
      price: 85,
      videos: ['', '']
    },
    {
      course_id: 107,
      title: 'HTML & CSS for Kids: Create Your First Website',
      description: 'Learn HTML and CSS to build and style a website.',
      difficulty: 'Beginner',
      duration: '5 weeks',
      author: 'Mariam Ali',
      category: 'web',
      num_of_videos: 88,
      photo: '../../assets/coursesphoto/web1.jpg',
      price: 25,
      videos: ['', '']
    },
    {
      course_id: 108,
      title: 'JavaScript Basics for Young Coders',
      description: 'Introduction to JavaScript, teaching how to make interactive websites.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Omar Khaled',
      category: 'web',
      num_of_videos: 65,
      photo: '../../assets/coursesphoto/web3.png',
      price: 25,
      videos: ['', '']
    },
    {
      course_id: 109,
      title: 'Web Development with Bootstrap',
      description: 'Learn how to create responsive websites using Bootstrap.',
      difficulty: 'Intermediate',
      duration: '6 weeks',
      author: 'Aya Soliman',
      category: 'web',
      num_of_videos: 50,
      photo: '../../assets/coursesphoto/web2.png ',
      price: 35,
      videos: ['', '']
    },
    {
      course_id: 110,
      title: 'Advanced HTML & CSS Techniques',
      description: 'Advanced concepts of HTML and CSS to build complex, responsive layouts.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Omar Khaled',
      category: 'web',
      num_of_videos: 70,
      photo: '../../assets/coursesphoto/webfinal.jpeg',
      price: 40,
      videos: ['', '']
    },


    {
      course_id: 111,
      title: 'Introduction to Python Programming',
      description: 'Fun and interactive Python introduction covering variables and loops.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Mohamed Hassan',
      category: 'AI',
      num_of_videos: 88,
      photo: '../../assets/coursesphoto/Rectangle 65.jpg',
      price: 20,
      videos: ['', '']
    },
    {
      course_id: 112,
      title: 'Robotics Programming for Kids',
      description: 'Explore coding robots using programming concepts. Ideal for kids who love coding and robotics.',
      difficulty: 'Advanced',
      duration: '8 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      num_of_videos: 85,
      photo: '../../assets/coursesphoto/ai2.jpg',
      price: 56,
      videos: ['', '']
    },
    {
      course_id: 113,
      title: 'AI and Machine Learning for Teens',
      description: 'Introduction to machine learning and artificial intelligence.',
      difficulty: 'Intermediate',
      duration: '10 weeks',
      author: 'Nour Ahmed',
      category: 'AI',
      num_of_videos: 75,
      photo: '../../assets/coursesphoto/any.jfif',
      price: 60,
      videos: ['', '']
    },
    {
      course_id: 114,
      title: 'Python AI: Create Your First AI App',
      description: 'Learn how to build basic AI applications using Python.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Fatima Khaled',
      category: 'AI',
      num_of_videos: 90,
      photo: '../../assets/coursesphoto/newg1.jfif',
      price: 55,
      videos: ['', '']
    },
    {
      course_id: 115,
      title: 'Data Science for Beginners',
      description: 'Introduction to data science using Python.',
      difficulty: 'Intermediate',
      duration: '8 weeks',
      author: 'Ahmed Hassan',
      category: 'AI',
      num_of_videos: 80,
      photo: '../../assets/coursesphoto/A young boy using a laptop possibly doing homework or browsing online _ Premium AI-generated image.jfif',
      price: 50,
      videos: ['', '']
    },
    {
      course_id: 116,
      title: 'AI and Robotics: Build Intelligent Robots',
      description: 'Learn how AI is used in robotics and build intelligent robots.',
      difficulty: 'Advanced',
      duration: '10 weeks',
      author: 'Hassan Youssef',
      category: 'AI',
      num_of_videos: 85,
      photo: '../../assets/coursesphoto/Rectangle 50 (2).jpg',
      price: 65,
      videos: ['', '']
    },

    // Mobile Category (6 courses)
    {
      course_id: 117,
      title: 'Build Your Own Mobile App',
      description: 'Learn to design and develop simple mobile apps covering UI, logic, and programming.',
      difficulty: 'Advanced',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      num_of_videos: 160,
      photo: '../../assets/coursesphoto/Cómo enseñar español a extranjeros_ todo lo que debes saber.jfif',
      price: 110,
      videos: ['', '']
    },
    {
      course_id: 118,
      title: 'Introduction to Swift: Building iOS Apps',
      description: 'Learn how to build iOS apps using Swift for beginners.',
      difficulty: 'Beginner',
      duration: '6 weeks',
      author: 'Layla Ahmed',
      category: 'mobile',
      num_of_videos: 80,
      photo: '../../assets/coursesphoto/web2.png',
      price: 50,
      videos: ['', '']
    },
    {
      course_id: 119,
      title: 'Create Cross-Platform Apps with Flutter',
      description: 'Learn to build mobile apps with Flutter for both iOS and Android.',
      difficulty: 'Intermediate',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      num_of_videos: 160,
      photo: '../../assets/coursesphoto/Rectangle 25.png',
      price: 110,
      videos: ['', '']
    },
    {
      course_id: 120,
      title: 'Mobile Games Development with Scratch',
      description: 'Learn how to design and develop mobile games using Scratch.',
      difficulty: 'Beginner',
      duration: '9 weeks',
      author: 'Khaled Mostafa',
      category: 'mobile',
      num_of_videos: 60,
      photo: "../../assets/coursesphoto/Premium Photo _ School boy on video conference with a teacher on a laptop.jfif",
      price: 20,
      videos: ['', '']
    }]

    filteredCourses: Course[] = [];


    filterCoursesByCategory(category: string): void {
      this.filteredCourses = this.courses_data.filter((course) => course.category === category);
    }
  
   
    getCourseById(courseId: number): Course | undefined {
      const course = this.courses_data.find(c => c.course_id === courseId);
      if (course) {
        console.log('Course found:', course);
      } else {
        console.log('Course not found for ID:', courseId);
      }
      return course;
    }

}
