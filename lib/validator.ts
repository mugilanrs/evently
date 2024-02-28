import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(4, 'Title Must Be Atleast 4 Characters'),
    description: z.string().min(10, 'Description Must be Atleast 10 Characters').max(400,'Description Must Less than 400 Characters'),
    location: z.string().min(3,'Location Must Be Atleast 3 Characters').max(400,'Location Must Less than 400 Characters'),
    imageUrl: z.string(),
    startDatetime: z.date(),
    endDateTime:z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

  })
