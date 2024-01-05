import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function CustomCard({
  title,
  project_link,
  project_thumbnail,
  project_source,
  project_description,
  image_url,
}) {
  return (
    <Card className="flex flex-col max-w-[400px] h-full backdrop bg-opacity-10 mb-4 rounded-xl md:p-3 text-white border bg-transparent shadow-lg">
      <CardHeader className="flex flex-1 gap-3">
        <div className="p-1 bg-white rounded-md">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex-1">
        <Image
          alt="Woman listing to music"
          className="object-cover mb-4"
          height={350}
          src={image_url}
          width={400}
        />
        <p>{project_description}</p>
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <Link
        className="cursor-scale small"
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
