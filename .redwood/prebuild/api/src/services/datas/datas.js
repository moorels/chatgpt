import { db } from "../../lib/db";
export const datas = () => {
  return db.data.findMany();
};
export const data = ({
  id
}) => {
  return db.data.findUnique({
    where: {
      id
    }
  });
};
export const createData = ({
  input
}) => {
  return db.data.create({
    data: input
  });
};
export const updateData = ({
  id,
  input
}) => {
  return db.data.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteData = ({
  id
}) => {
  return db.data.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsImRhdGFzIiwiZGF0YSIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVEYXRhIiwiaW5wdXQiLCJjcmVhdGUiLCJ1cGRhdGVEYXRhIiwidXBkYXRlIiwiZGVsZXRlRGF0YSIsImRlbGV0ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvc2VydmljZXMvZGF0YXMvZGF0YXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBRdWVyeVJlc29sdmVycywgTXV0YXRpb25SZXNvbHZlcnMgfSBmcm9tICd0eXBlcy9ncmFwaHFsJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5cbmV4cG9ydCBjb25zdCBkYXRhczogUXVlcnlSZXNvbHZlcnNbJ2RhdGFzJ10gPSAoKSA9PiB7XG4gIHJldHVybiBkYi5kYXRhLmZpbmRNYW55KClcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGE6IFF1ZXJ5UmVzb2x2ZXJzWydkYXRhJ10gPSAoeyBpZCB9KSA9PiB7XG4gIHJldHVybiBkYi5kYXRhLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEYXRhOiBNdXRhdGlvblJlc29sdmVyc1snY3JlYXRlRGF0YSddID0gKHsgaW5wdXQgfSkgPT4ge1xuICByZXR1cm4gZGIuZGF0YS5jcmVhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGF0YTogTXV0YXRpb25SZXNvbHZlcnNbJ3VwZGF0ZURhdGEnXSA9ICh7IGlkLCBpbnB1dCB9KSA9PiB7XG4gIHJldHVybiBkYi5kYXRhLnVwZGF0ZSh7XG4gICAgZGF0YTogaW5wdXQsXG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGE6IE11dGF0aW9uUmVzb2x2ZXJzWydkZWxldGVEYXRhJ10gPSAoeyBpZCB9KSA9PiB7XG4gIHJldHVybiBkYi5kYXRhLmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSlcbn1cbiJdLCJtYXBwaW5ncyI6IkFBRUEsU0FBU0EsRUFBRTtBQUVYLE9BQU8sTUFBTUMsS0FBOEIsR0FBR0EsQ0FBQSxLQUFNO0VBQ2xELE9BQU9ELEVBQUUsQ0FBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztBQUMzQixDQUFDO0FBRUQsT0FBTyxNQUFNRCxJQUE0QixHQUFHQSxDQUFDO0VBQUVFO0FBQUcsQ0FBQyxLQUFLO0VBQ3RELE9BQU9KLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDRyxVQUFVLENBQUM7SUFDeEJDLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUcsVUFBMkMsR0FBR0EsQ0FBQztFQUFFQztBQUFNLENBQUMsS0FBSztFQUN4RSxPQUFPUixFQUFFLENBQUNFLElBQUksQ0FBQ08sTUFBTSxDQUFDO0lBQ3BCUCxJQUFJLEVBQUVNO0VBQ1IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTUUsVUFBMkMsR0FBR0EsQ0FBQztFQUFFTixFQUFFO0VBQUVJO0FBQU0sQ0FBQyxLQUFLO0VBQzVFLE9BQU9SLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDUyxNQUFNLENBQUM7SUFDcEJULElBQUksRUFBRU0sS0FBSztJQUNYRixLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxPQUFPLE1BQU1RLFVBQTJDLEdBQUdBLENBQUM7RUFBRVI7QUFBRyxDQUFDLEtBQUs7RUFDckUsT0FBT0osRUFBRSxDQUFDRSxJQUFJLENBQUNXLE1BQU0sQ0FBQztJQUNwQlAsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDIn0=