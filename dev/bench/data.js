window.BENCHMARK_DATA = {
  "lastUpdate": 1577594277013,
  "repoUrl": "https://github.com/SVilgelm/gocloak",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sergey.vilgelm@ibm.com",
            "name": "Sergey Vilgelm",
            "username": "SVilgelm"
          },
          "committer": {
            "email": "sergey.vilgelm@ibm.com",
            "name": "Sergey Vilgelm",
            "username": "SVilgelm"
          },
          "distinct": true,
          "id": "c261f079c32bc9642130818ff9b210283d55b0b7",
          "message": "Move to github actions",
          "timestamp": "2019-12-28T22:35:35-06:00",
          "tree_id": "6b138a7dfc234c045a8a01b67bb208058a21ee6e",
          "url": "https://github.com/SVilgelm/gocloak/commit/c261f079c32bc9642130818ff9b210283d55b0b7"
        },
        "date": 1577594276652,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 92206986,
            "unit": "ns/op\t   44651 B/op\t     180 allocs/op",
            "extra": "13 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 92693324,
            "unit": "ns/op\t   50690 B/op\t     183 allocs/op",
            "extra": "13 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 97015124,
            "unit": "ns/op\t   65472 B/op\t     182 allocs/op",
            "extra": "12 times"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 65302146,
            "unit": "ns/op\t   66931 B/op\t     183 allocs/op",
            "extra": "21 times\n2 procs"
          }
        ]
      }
    ]
  }
}