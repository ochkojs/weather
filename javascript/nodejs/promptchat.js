
import gradient from 'gradient-string';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';

const count = 0;
 
const questions1 = async () => {
    const answers =  await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Цэнхэр, шар өнгийн дундаас ямар өнгө гардаг вэ',
        choices: [
            'шар',
            'Улаан',
            'Ногоон',
            'Цэнхэр',
        ],
    });
    
    const spinner = createSpinner('Таны хариултыг шалгаж байна...').start();
    
    setTimeout(() => {
        if (answers.question_1 == 'Ногоон') {
            spinner.success({ text: "Хариулт зөв байна."});
            count++;
        } else {
            spinner.error({
                text: "Хариулт буруу байна..."
            });
        }
      
    }, 1000);
}

const questions2 = async () => {
    const answers2 =  await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Солонго хэдэн өнгөтэй вэ',
        choices: [
            '5',
            '6',
            '7',
            '8',
        ],
    });
    
    const spinner2 = createSpinner('Таны хариултыг шалгаж байна...').start();
    
    setTimeout(() => {
        if (answers2.question_2 == '7') {
            spinner2.success({ text: "Хариулт зөв байна."});
            count++;
        } else {
            spinner2.error({
                text: "Хариулт буруу байна..."
            });
        }
      
    }, 1000);
}

const prompts = async () => {
    await questions1();
    await questions2();
}

prompts();
