import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

const NUM_PEOPLE = 9;

async function getPeople() {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${NUM_PEOPLE}`,
    );
    const data = await response.json();
    const results = data.results;
    results.forEach((person: any) => {
      person.name = `${person.name.title} ${person.name.first} ${person.name.last}`;
    });
    console.log("results:\n", results);
    return results;
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((people) => {
      setPeople(people);
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-3">
        {people.map((person: any) => {
          return (
            <Card className="m-2 max-w-sm" key={person.login.uuid}>
              <CardHeader>
                <CardTitle>{`${person.name}`}</CardTitle>
                <CardDescription>{person.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={person.picture.large}
                  width={200}
                  height={200}
                  alt={`${person.name} picture`}
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
