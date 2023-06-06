import { db } from "../../lib/db";
export const users = () => {
  return db.user.findMany();
};
export const user = ({
  id
}) => {
  return db.user.findUnique({
    where: {
      id
    }
  });
};
export const createUser = ({
  input
}) => {
  return db.user.create({
    data: input
  });
};
export const updateUser = ({
  id,
  input
}) => {
  return db.user.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteUser = ({
  id
}) => {
  return db.user.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsInVzZXJzIiwidXNlciIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVVc2VyIiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlVXNlciIsInVwZGF0ZSIsImRlbGV0ZVVzZXIiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL3VzZXJzL3VzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUXVlcnlSZXNvbHZlcnMsIE11dGF0aW9uUmVzb2x2ZXJzIH0gZnJvbSAndHlwZXMvZ3JhcGhxbCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuXG5leHBvcnQgY29uc3QgdXNlcnM6IFF1ZXJ5UmVzb2x2ZXJzWyd1c2VycyddID0gKCkgPT4ge1xuICByZXR1cm4gZGIudXNlci5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyOiBRdWVyeVJlc29sdmVyc1sndXNlciddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlcjogTXV0YXRpb25SZXNvbHZlcnNbJ2NyZWF0ZVVzZXInXSA9ICh7IGlucHV0IH0pID0+IHtcbiAgcmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXI6IE11dGF0aW9uUmVzb2x2ZXJzWyd1cGRhdGVVc2VyJ10gPSAoeyBpZCwgaW5wdXQgfSkgPT4ge1xuICByZXR1cm4gZGIudXNlci51cGRhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyOiBNdXRhdGlvblJlc29sdmVyc1snZGVsZXRlVXNlciddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIudXNlci5kZWxldGUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG4iXSwibWFwcGluZ3MiOiJBQUVBLFNBQVNBLEVBQUU7QUFFWCxPQUFPLE1BQU1DLEtBQThCLEdBQUdBLENBQUEsS0FBTTtFQUNsRCxPQUFPRCxFQUFFLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQUVELE9BQU8sTUFBTUQsSUFBNEIsR0FBR0EsQ0FBQztFQUFFRTtBQUFHLENBQUMsS0FBSztFQUN0RCxPQUFPSixFQUFFLENBQUNFLElBQUksQ0FBQ0csVUFBVSxDQUFDO0lBQ3hCQyxLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1HLFVBQTJDLEdBQUdBLENBQUM7RUFBRUM7QUFBTSxDQUFDLEtBQUs7RUFDeEUsT0FBT1IsRUFBRSxDQUFDRSxJQUFJLENBQUNPLE1BQU0sQ0FBQztJQUNwQkMsSUFBSSxFQUFFRjtFQUNSLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1HLFVBQTJDLEdBQUdBLENBQUM7RUFBRVAsRUFBRTtFQUFFSTtBQUFNLENBQUMsS0FBSztFQUM1RSxPQUFPUixFQUFFLENBQUNFLElBQUksQ0FBQ1UsTUFBTSxDQUFDO0lBQ3BCRixJQUFJLEVBQUVGLEtBQUs7SUFDWEYsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNUyxVQUEyQyxHQUFHQSxDQUFDO0VBQUVUO0FBQUcsQ0FBQyxLQUFLO0VBQ3JFLE9BQU9KLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDWSxNQUFNLENBQUM7SUFDcEJSLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9