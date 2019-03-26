## Assignment

#### Solution 1
A simple function in PHP that returns how many incorrect entries were reported. It runs for the provided cases by default.
Time Complexity: O(n)

#### Solution 2
A simple Javascipt function embedded in the page via external file.
Open index.html in a browser(Google Chrome) to checkout image preview from drag/drop and image link

#### Solution 3
A simple node API with express for basic functionality and routing. 
To install and run

```
cd three
npm install
npm start
```

URL: ``http://localhost:7000/search?q=<query>``

where query can be any string

Response:
A JSON output which returns `status` true and response in `data` key.

**Explaination**: Hits the API first time to get result and information about number of pages. Then hits the other APIs in async and combines their response and orders it all alphabetically before rendering it as a response.