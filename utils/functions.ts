import axios from "axios";
export default async function getActiveSlotByMasterClassId(id: string) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_API}masterclasses/${id}`,
    {
      headers: {
        "Accept-Encoding": "gzip",
      },
    }
  );
  const slots = data?.data?.slots;
  const activeSlot = slots?.find((slot: any) => {
    return slot.active;
  });
  return activeSlot;
}
