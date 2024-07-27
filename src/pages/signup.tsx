import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function SignUp() {

  const formSchema = z.object({
    qiitaId: z.string().min(1, {
      message: "値が入力されていません",
    }),
    zennId: z.string().min(1, {
      message: "値が入力されていません。"
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      qiitaId: "",
      zennId: ""
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center pt-[100px]">
      <div>
        <h3 className="text-center font-bold text-[2.0rem] mb-[15px]">Singup to App</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mb-[10px]">
            <FormField
              control={form.control}
              name="qiitaId"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <img src="/qiita-big.png" alt="" className="w-[70px] mb-[10px]" />
                    <FormControl>
                      <Input placeholder="Qiita ID" {...field} className="w-[300px]" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zennId"
              render={({ field }) => (
                <FormItem>
                  <div >
                    <img src="/zenn-big.png" alt="" className="w-[80px] mb-[10px]" />
                    <FormControl>
                      <Input placeholder="Zenn ID" {...field} className="w-[300px]" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="flex items-center gap-2 mx-auto">
              <FontAwesomeIcon icon={faGoogle} />
              <p>Googleでサインアップする</p>
            </Button>
          </form>
        </Form>
        <div className="text-center">
          <Button asChild variant="link">
            <Link to="/login">
              Already have an account?
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
