import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  private loggedIn: boolean = false;

  login(user: User): boolean {
    const isAuthenticated = this.users_data.some(
      users_data => users_data.email === user.email && users_data.password === user.password
    );
    this.loggedIn = isAuthenticated;
    return isAuthenticated;
  }
  users_data: User[] = [
    {
      id: 1,
      user_name: 'Ali',
      password: '123',
      role: 'student',
      age: 19,
      enrolled: [70, 50, 60],
      progress: ['20%', '80%', '33%'],
      email: 'ali88@gmail.com',
      photo: '../assets/usersPhotos/user2.jpg',
      comments: ["My child absolutely loves the interactive lessons! The gamified approach makes learning to code so much fun."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 2,
      user_name: 'Fatima',
      password: 'password123',
      role: 'student',
      age: 17,
      enrolled: [70, 80],
      progress: ['45%', '10%'],
      email: 'fhassan88@gmail.com',
      photo: '../assets/usersPhotos/user5.jpg',
      comments: ["The progress tracking feature is really helpful. It's great to see how my kid is improving with each lesson."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 3,
      user_name: 'Mohamed',
      password: 'pass456',
      role: 'student',
      age: 16,
      enrolled: [50, 60],
      progress: ['60%', '25%'],
      email: 'mohamed123@gmail.com',
      photo: '../assets/usersPhotos/user6.jpg',
      comments: ["The instructors are fantastic! They explain complex coding concepts in a way that's easy for kids to understand."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 4,
      user_name: 'Sara',
      password: 'sara789',
      role: 'student',
      age: 18,
      enrolled: [70, 90, 60],
      progress: ['75%', '40%', '55%'],
      email: 'sara568@gmail.com',
      photo: '../assets/usersPhotos/user4.jpg',
      comments: ["The projects are engaging and practical. It's amazing to see what my child can create with the skills they've learned."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 5,
      user_name: 'Omar',
      password: 'omar321',
      role: 'student',
      age: 19,
      enrolled: [80, 90],
      progress: ['30%', '65%'],
      email: 'omar445@gmail.com',
      photo: '../assets/usersPhotos/user7.jpg',
      comments: ["The platform is user-friendly, and the support team is very responsive whenever we have questions."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 6,
      user_name: 'Layla',
      password: 'layla543',
      role: 'student',
      age: 15,
      enrolled: [50, 60, 80],
      progress: ['10%', '85%', '50%'],
      email: 'lili76@gmail.com',
      photo: '../assets/usersPhotos/user9.jpg',
      comments: ["I appreciate the emphasis on creativity alongside coding. It's inspiring to see my child's ideas come to life."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 7,
      user_name: 'Hassan',
      password: 'hassan007',
      role: 'student',
      age: 20,
      enrolled: [60, 70],
      progress: ['100%', '60%'],
      email: 'hassan88@gmail.com',
      photo: '../assets/usersPhotos/user8.jpg',
      comments: ["The community aspect is wonderful. My kid enjoys collaborating with others and sharing their projects."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 8,
      user_name: 'Nour',
      password: 'nourpass',
      role: 'student',
      age: 17,
      enrolled: [50, 90],
      progress: ['95%', '35%'],
      email: 'nona12@gmail.com',
      photo: '../assets/usersPhotos/user3.jpg',
      comments: ["The curriculum is well-structured. It builds foundational skills while keeping kids motivated to learn more."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 9,
      user_name: 'Khaled',
      password: 'khaled999',
      role: 'student',
      age: 16,
      enrolled: [60, 80],
      progress: ['20%', '70%'],
      email: 'khaled45@gmail.com',
      photo: '../assets/usersPhotos/user10.jpg',
      comments: ["The challenges are thoughtfully designed to encourage problem-solving and critical thinking."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    },
    {
      id: 10,
      user_name: 'Mariam',
      password: 'mariampass',
      role: 'student',
      age: 18,
      enrolled: [50, 70, 90],
      progress: ['85%', '55%', '25%'],
      email: 'm88pa@gmail.com',
      photo: '../assets/usersPhotos/user1.jpg',
      comments: ["As a parent, I feel confident that my child is gaining valuable skills for the future in a safe and supportive environment."],
      lastAccess:'12/2/2023',
      firstAccess:'12/2/2022'
    }
  ]
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getCurrentUser(email: string): User | null {
    return this.users_data.find(user => user.email === email) || null;
  }
}



