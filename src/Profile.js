import React from 'react';

function Profile({userData}) {
  return (
    <div className='row'>
      <div className="card">
        <img src={userData.avatar_url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{userData.name}</h5>
          <p className="card-text">{userData.bio}</p>
          <p className="card-text">{userData.location}</p>
          <a href={userData.url} target='_blank' className="btn btn-primary">Link</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
