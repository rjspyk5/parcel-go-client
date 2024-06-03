export const MyProfile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="col-span-1 bg-red-500">Test</div>
      <div className="md:col-span-2 bg-emerald-600">
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
  );
};
