export const MyProfile = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 shadow-xl border ">Test</div>
        <div className="md:col-span-2 shadow-xl border">
          <table className="table-auto">
            <tbody>
              <tr>
                <td>Name :</td>
                <td>Rakibul Islam</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>test@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
