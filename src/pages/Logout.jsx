import React, { useEffect } from 'react';

export default function Logout({ onLogout }) {
  useEffect(() => {
    fetch('http://localhost/blog-api/logout.php', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && onLogout) onLogout();
      });
  }, [onLogout]);

  return (
    <div className="container mt-5 text-center">
      <h3>Logging out...</h3>
    </div>
  );
}