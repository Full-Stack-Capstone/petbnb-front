import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUser from '../../redux/thunks/fetchUser';
// import fetchCurrentUser from '../../redux/thunks/fetchCurrentUser';
// import editUser from '../../redux/thunks/editUser';

function EditUser() {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.user.data);
  const user = useSelector((state) => state.user.data);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // console.log(currentUser);

  useEffect(() => {
    dispatch(fetchUser(7));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = new FormData();
    requestBody.append('name', name);
    requestBody.append('image', image);
    console.log(requestBody.get('name'));
    console.log(requestBody.get('image'));

    // fetch(`http://127.0.0.1:3001/users/${currentUser.id}`, {
    fetch('http://127.0.0.1:3001/users/7}', {
      method: 'PUT',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: requestBody,
    });
    // dispatch(editUser(currentUser.id, requestBody));
  };

  return (
    <form onSubmit={handleSubmit}>
      <img
        src={`http://localhost:3001${user.image_url}`}
        alt="user avatar"
        style={{ width: '100px', height: '100px' }}
      />
      <input id="name" type="text" placeholder={user.name} onChange={(e) => setName(e.target.value)} />
      <br />
      {/* upload image */}
      <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
