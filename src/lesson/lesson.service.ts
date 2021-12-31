import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './inputs/create-lesson.input';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne({ id });
  }

  createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      ...createLessonInput,
    });

    return this.lessonRepository.save(lesson);
  }
}
