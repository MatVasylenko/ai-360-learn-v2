"use client";

import React, { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useGetChatMutation } from '../api/productApi';
import OpenAI from 'openai';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

interface IProductChatFormProps {

};

const ProductChatForm: FC<IProductChatFormProps> = ({ }) => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessageParam[]>([
    // {
    //   role: 'user',
    //   content: 'ЯК стати програмістом?'
    // },
    // {
    //   role: 'assistant',
    //   content: "Для того, щоб стати програмістом, варто пройти наступні кроки:\n\n1. Визначити, яку саме галузь програмування ви хочете вивчати. Це може бути розробка веб-сайтів, мобільних додатків, ігор або додатків для настільних комп'ютерів.\n\n2. Вибрати мови програмування, які вам потрібно вивчити в обраній галузі. Наприклад, для веб-розробки можна вивчати HTML, CSS та JavaScript.\n\n3. Ознайомитися з основами програмування, такими як змінні, умовні оператори, цикли та функції. Це допоможе вам зрозуміти, як писати програми.\n\n4. Практикуватися в написанні коду. Робіть вправи та проектування, щоб набути практичного досвіду.\n\n5. Вивчати нові технології й інструменти, які використовуються у вашій галузі. Програмування постійно розвивається, тому важливо бути в курсі нових тенденцій.\n\n6. Знайти ментора або приєднатися до спільноти програмістів. Вони можуть допомогти вам вирішити проблеми, дати поради та надихнути вас.\n\n7. Брати участь у проектах або стажуванні. Це допоможе вам отримати практичний досвід роботи програмістом і побудувати портфоліо.\n\n8. Продовжувати навчання й розвиватися. В програмуванні ніколи не можна зупинятися на досягнутому, потрібно постійно поглиблювати свої знання та вдосконалювати свої навички."
    // },
    // {
    //   role: 'user',
    //   content: 'ЯК стати програмістом?'
    // },
    // {
    //   role: 'assistant',
    //   content: "Для того, щоб стати програмістом, варто пройти наступні кроки:\n\n1. Визначити, яку саме галузь програмування ви хочете вивчати. Це може бути розробка веб-сайтів, мобільних додатків, ігор або додатків для настільних комп'ютерів.\n\n2. Вибрати мови програмування, які вам потрібно вивчити в обраній галузі. Наприклад, для веб-розробки можна вивчати HTML, CSS та JavaScript.\n\n3. Ознайомитися з основами програмування, такими як змінні, умовні оператори, цикли та функції. Це допоможе вам зрозуміти, як писати програми.\n\n4. Практикуватися в написанні коду. Робіть вправи та проектування, щоб набути практичного досвіду.\n\n5. Вивчати нові технології й інструменти, які використовуються у вашій галузі. Програмування постійно розвивається, тому важливо бути в курсі нових тенденцій.\n\n6. Знайти ментора або приєднатися до спільноти програмістів. Вони можуть допомогти вам вирішити проблеми, дати поради та надихнути вас.\n\n7. Брати участь у проектах або стажуванні. Це допоможе вам отримати практичний досвід роботи програмістом і побудувати портфоліо.\n\n8. Продовжувати навчання й розвиватися. В програмуванні ніколи не можна зупинятися на досягнутому, потрібно постійно поглиблювати свої знання та вдосконалювати свої навички."
    // },
  ]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const [getChat, {
    isSuccess,
    data,
    isLoading,
  }] = useGetChatMutation();

  useEffect(() => {
    if (isSuccess) {
      setMessages((prevMessage) => [...prevMessage, data]);
    }
  }, [isSuccess]);

  useEffect(() => {
    scrollToBottom();
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const userMessage: OpenAI.Chat.ChatCompletionMessageParam = {
      role: "user",
      content: values.prompt,
    }
    setMessages((prevMessage) => [...prevMessage, userMessage]);
    getChat({
      messages: [...messages, userMessage]
    })
    form.reset();
  }

  return (
    <div className="px-4 md:w-[70%] md:mx-auto">
      <ScrollArea className="h-[65vh]">
        <div className="text-sm flex flex-col gap-3 p-4 rounded bg-blue-100">
          {!messages.length && "PROMOTICH 360 буде дуже радий вам допомогти. Зробіть ваш запит."}
          {messages.map((message, idx) => (
            <div key={`message${idx}`} className="flex gap-3">
              <div>
                <Avatar>
                  <AvatarFallback>
                    {message.role === 'user' && "CU"}
                    {message.role === 'assistant' && "AI"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>{message.content}</div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>
      {isLoading && (
        <div>Loading...</div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Як пройти в бібліотеку?" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Відправити</Button>
        </form>
      </Form>
    </div>
  )
};

export default ProductChatForm;