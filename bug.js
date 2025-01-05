```javascript
const query = { name: 'John Doe' };

// Incorrect use of $regex
db.collection('users').find( { name: { $regex: query.name } } ).toArray();
```