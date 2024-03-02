import { Suspense } from "react";
import EditForm from "./edit-form";

export default function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Suspense fallback={null}>
        <EditForm id={+params.id} />
      </Suspense>
    </main>
  );
}
