export function load({ cookies }) {
  const id = cookies.get("userid");

  if (!id) {
    cookies.set("userid", crypto.randomUUID(), { path: "/" });
  }

  return {};
}

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(data);
  },
};
