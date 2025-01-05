```javascript
const query = { name: 'John Doe' };

// Correct use of $regex
db.collection('users').find( { name: { $regex: new RegExp(query.name) } } ).toArray();
```