import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Course {
    id: bigint;
    title: string;
    duration: string;
    difficulty: string;
    description: string;
    category: string;
}
export interface Inquiry {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    courseId: bigint;
}
export interface backendInterface {
    getAllCourses(): Promise<Array<Course>>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getCourseById(id: bigint): Promise<Course>;
    initializeCourses(): Promise<void>;
    submitInquiry(name: string, email: string, message: string, courseId: bigint): Promise<void>;
}
