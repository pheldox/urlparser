import {  Injectable } from '@nestjs/common';
const jsdom = require('jsdom')
const {JSDOM} = jsdom;
import { Logger } from '@nestjs/common';

const got = require('got')
import urls from '../prisma/urls'
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';



@Injectable()
export class AppService {
  findId(id) {
    const { longurl } = urls.find((p) => p._id == id);  
    Logger.log(longurl)
    return urlParse(longurl);
  }
}



async function urlParse(userurl) {
  const prisma = new PrismaClient();
  const res = {
    title: '',
    icon: '',
    description: '',
  };
  try {
    const response = await got(userurl);
    const dom = new JSDOM(response.body)
    const title = dom.window.document.querySelector('title').textContent
    const icon = dom.window.document.querySelector('link[rel*=icon]').href
    const description = dom.window.document.querySelector('meta[name*=description]').content

    // res.title = title
    // res.icon = icon
    // res.description = description
    const savedurl = await prisma.url.findUnique({
      where : {
        longurl: userurl
      }
    })
    if(savedurl){
      return savedurl
    } 
const newParsed = await prisma.url.create({
      data: {
        title: title,
        icon: icon,
        longurl: userurl,
        description: description,
      },
    });

    return newParsed;
  } catch (err) {
    Logger.log(err);
  }
}