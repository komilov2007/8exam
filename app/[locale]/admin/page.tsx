function AdminPage() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-extrabold">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-3xl bg-transperent h-119 p-6 shadow">
          <h2 className="text-lg font-semibold text-black/60">Users</h2>
          <p className="mt-4 text-4xl font-extrabold">100</p>
        </div>

        <div className="rounded-3xl bg-transperent p-6 shadow">
          <h2 className="text-lg font-semibold text-black/60">Menu</h2>
          <p className="mt-4 text-4xl font-extrabold">100</p>
        </div>

        <div className="rounded-3xl bg-transperent p-6 shadow">
          <h2 className="text-lg font-semibold text-black/60">Reservations</h2>
          <p className="mt-4 text-4xl font-extrabold">100</p>
        </div>

        <div className="rounded-3xl bg-transperent p-6 shadow">
          <h2 className="text-lg font-semibold text-black/60">Contacts</h2>
          <p className="mt-4 text-4xl font-extrabold">100</p>
        </div>
      </div>
    </section>
  );
}
export default AdminPage;
