import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStudentInput } from './inputs/create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((type) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(@Args('input') createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }
}
