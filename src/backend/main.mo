import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Course = {
    id : Nat;
    title : Text;
    description : Text;
    duration : Text;
    difficulty : Text;
    category : Text;
  };

  module Course {
    public func compare(course1 : Course, course2 : Course) : Order.Order {
      Nat.compare(course1.id, course2.id);
    };
  };

  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    courseId : Nat;
    timestamp : Int;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let courses = Map.empty<Nat, Course>();
  let inquiries = Map.empty<Nat, Inquiry>();
  var nextInquiryId = 0;

  // Initialize with sample courses
  public shared ({ caller }) func initializeCourses() : async () {
    if (courses.size() > 0) { Runtime.trap("Courses already initialized") };
    let sampleCourses : [Course] = [
      {
        id = 1;
        title = "Introduction to Algebra";
        description = "Learn the basics of algebra, including equations and variables.";
        duration = "10 hours";
        difficulty = "Beginner";
        category = "Math";
      },
      {
        id = 2;
        title = "Fundamentals of Biology";
        description = "Explore the essentials of biology, including cell structure and genetics.";
        duration = "12 hours";
        difficulty = "Intermediate";
        category = "Science";
      },
      {
        id = 3;
        title = "Programming Basics";
        description = "Start your journey in coding with this comprehensive introductory course.";
        duration = "15 hours";
        difficulty = "Beginner";
        category = "Programming";
      },
      {
        id = 4;
        title = "World History Overview";
        description = "A detailed look at the major events shaping our world history.";
        duration = "20 hours";
        difficulty = "Advanced";
        category = "History";
      },
      {
        id = 5;
        title = "English Grammar Essentials";
        description = "Master the key components of English grammar.";
        duration = "8 hours";
        difficulty = "Beginner";
        category = "English";
      },
      {
        id = 6;
        title = "Creative Arts Techniques";
        description = "Develop artistic skills in various creative arts forms.";
        duration = "18 hours";
        difficulty = "Intermediate";
        category = "Arts";
      },
      {
        id = 7;
        title = "Indian History";
        description = "A comprehensive study of India's rich history — from the Indus Valley Civilization and Vedic period, through the Mughal Empire and colonial era, to Independence and modern India.";
        duration = "25 hours";
        difficulty = "Intermediate";
        category = "India Studies";
      },
      {
        id = 8;
        title = "Indian Economy";
        description = "Understand India's economic journey — from the post-independence planned economy and liberalization of 1991, to today's GDP growth, agriculture, industry, and emerging sectors.";
        duration = "20 hours";
        difficulty = "Intermediate";
        category = "India Studies";
      },
      {
        id = 9;
        title = "Indian Geography";
        description = "Explore India's diverse physical landscape — the Himalayas, Indo-Gangetic Plain, Deccan Plateau, river systems, climate zones, natural resources, and regional geography.";
        duration = "18 hours";
        difficulty = "Beginner";
        category = "India Studies";
      },
    ];
    for (course in sampleCourses.values()) {
      courses.add(course.id, course);
    };
  };

  public query ({ caller }) func getAllCourses() : async [Course] {
    courses.values().toArray().sort();
  };

  public query ({ caller }) func getCourseById(id : Nat) : async Course {
    switch (courses.get(id)) {
      case (null) { Runtime.trap("Course not found") };
      case (?course) { course };
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text, courseId : Nat) : async () {
    if (not courses.containsKey(courseId)) {
      Runtime.trap("Course does not exist");
    };
    let inquiry : Inquiry = {
      name;
      email;
      message;
      courseId;
      timestamp = Time.now();
    };
    inquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };
};
