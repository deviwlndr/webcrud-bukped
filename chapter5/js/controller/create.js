const url = "http://127.0.0.1:5501/form.html" `
  INSERT INTO user (id, first_name, last_name, email, judul, cover)
  VALUES ()
`;

connection.query(insertDataQuery, (error, results) => {
  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully!');
  }
});

