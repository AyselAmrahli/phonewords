import { Injectable } from '@nestjs/common';
import { letters } from './phonewords.constants';

@Injectable()
export class PhonewordsService {
  private phonewords: string[] = [];

  async isWordValid(num: string): Promise<boolean> {
    const keys = num.split('');
    if(keys.includes('*') || num === '0' || num ==='1') return false
    return true
  }

  async generateWords(num: string): Promise<Array<string>> {
    this.phonewords = [];

    for(const currNum of num){
      const words = [];
      const currLetters = letters[currNum];

      if (currLetters) {
        for(const letter of currLetters) {
          if (this.phonewords.length){
            for (let i = this.phonewords.length - 1; i >= 0; i--) {
              words.push(this.phonewords[i] + letter)
            }
          } else words.push(letter)
        }
      } else words.push(...this.phonewords)
      this.phonewords = words;
    }
    return this.phonewords;
  }
}
