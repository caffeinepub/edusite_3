import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Course } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllCourses() {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCourses();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 5,
  });
}

export function useGetCourseById(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Course>({
    queryKey: ["course", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) throw new Error("Actor or id not available");
      return actor.getCourseById(id);
    },
    enabled: !!actor && !isFetching && id !== null,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
      courseId,
    }: {
      name: string;
      email: string;
      message: string;
      courseId: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitInquiry(name, email, message, courseId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
