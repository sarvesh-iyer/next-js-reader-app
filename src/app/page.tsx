// "use client";

import Button from "@/components/button/Button";
import Image from "next/image";

export default async function Home() {
	
	let response = await fetch("https://jsonplaceholder.typicode.com/posts")
	let data = await response.json()

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			{data?.map((item: any) => (
				<div key={item.id} className="border border-cyan-800 border-solid rounded-lg p-5 text-center">
					<p>{item?.id}</p>
					<p>{item?.title}</p>
					<p>{item?.body}</p>
					<Button onBtnClick={data} label="click" />
				</div>
			))}
		</div>
	);
}
