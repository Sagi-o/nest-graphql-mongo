import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((type) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '123',
      name: 'English Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
