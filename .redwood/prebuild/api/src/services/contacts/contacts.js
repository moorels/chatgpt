import { db } from "../../lib/db";
export const contacts = () => {
  return db.contact.findMany();
};
export const contact = ({
  id
}) => {
  return db.contact.findUnique({
    where: {
      id
    }
  });
};
export const createContact = ({
  input
}) => {
  return db.contact.create({
    data: input
  });
};
export const updateContact = ({
  id,
  input
}) => {
  return db.contact.update({
    data: input,
    where: {
      id
    }
  });
};
export const deleteContact = ({
  id
}) => {
  return db.contact.delete({
    where: {
      id
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYiIsImNvbnRhY3RzIiwiY29udGFjdCIsImZpbmRNYW55IiwiaWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVDb250YWN0IiwiaW5wdXQiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlQ29udGFjdCIsInVwZGF0ZSIsImRlbGV0ZUNvbnRhY3QiLCJkZWxldGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9hcGkvc3JjL3NlcnZpY2VzL2NvbnRhY3RzL2NvbnRhY3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUXVlcnlSZXNvbHZlcnMsIE11dGF0aW9uUmVzb2x2ZXJzIH0gZnJvbSAndHlwZXMvZ3JhcGhxbCdcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdzcmMvbGliL2RiJ1xuXG5leHBvcnQgY29uc3QgY29udGFjdHM6IFF1ZXJ5UmVzb2x2ZXJzWydjb250YWN0cyddID0gKCkgPT4ge1xuICByZXR1cm4gZGIuY29udGFjdC5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBjb25zdCBjb250YWN0OiBRdWVyeVJlc29sdmVyc1snY29udGFjdCddID0gKHsgaWQgfSkgPT4ge1xuICByZXR1cm4gZGIuY29udGFjdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGFjdDogTXV0YXRpb25SZXNvbHZlcnNbJ2NyZWF0ZUNvbnRhY3QnXSA9ICh7XG4gIGlucHV0LFxufSkgPT4ge1xuICByZXR1cm4gZGIuY29udGFjdC5jcmVhdGUoe1xuICAgIGRhdGE6IGlucHV0LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29udGFjdDogTXV0YXRpb25SZXNvbHZlcnNbJ3VwZGF0ZUNvbnRhY3QnXSA9ICh7XG4gIGlkLFxuICBpbnB1dCxcbn0pID0+IHtcbiAgcmV0dXJuIGRiLmNvbnRhY3QudXBkYXRlKHtcbiAgICBkYXRhOiBpbnB1dCxcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29udGFjdDogTXV0YXRpb25SZXNvbHZlcnNbJ2RlbGV0ZUNvbnRhY3QnXSA9ICh7IGlkIH0pID0+IHtcbiAgcmV0dXJuIGRiLmNvbnRhY3QuZGVsZXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICB9KVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQSxTQUFTQSxFQUFFO0FBRVgsT0FBTyxNQUFNQyxRQUFvQyxHQUFHQSxDQUFBLEtBQU07RUFDeEQsT0FBT0QsRUFBRSxDQUFDRSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFRCxPQUFPLE1BQU1ELE9BQWtDLEdBQUdBLENBQUM7RUFBRUU7QUFBRyxDQUFDLEtBQUs7RUFDNUQsT0FBT0osRUFBRSxDQUFDRSxPQUFPLENBQUNHLFVBQVUsQ0FBQztJQUMzQkMsS0FBSyxFQUFFO01BQUVGO0lBQUc7RUFDZCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNRyxhQUFpRCxHQUFHQSxDQUFDO0VBQ2hFQztBQUNGLENBQUMsS0FBSztFQUNKLE9BQU9SLEVBQUUsQ0FBQ0UsT0FBTyxDQUFDTyxNQUFNLENBQUM7SUFDdkJDLElBQUksRUFBRUY7RUFDUixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsT0FBTyxNQUFNRyxhQUFpRCxHQUFHQSxDQUFDO0VBQ2hFUCxFQUFFO0VBQ0ZJO0FBQ0YsQ0FBQyxLQUFLO0VBQ0osT0FBT1IsRUFBRSxDQUFDRSxPQUFPLENBQUNVLE1BQU0sQ0FBQztJQUN2QkYsSUFBSSxFQUFFRixLQUFLO0lBQ1hGLEtBQUssRUFBRTtNQUFFRjtJQUFHO0VBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE9BQU8sTUFBTVMsYUFBaUQsR0FBR0EsQ0FBQztFQUFFVDtBQUFHLENBQUMsS0FBSztFQUMzRSxPQUFPSixFQUFFLENBQUNFLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDO0lBQ3ZCUixLQUFLLEVBQUU7TUFBRUY7SUFBRztFQUNkLENBQUMsQ0FBQztBQUNKLENBQUMifQ==