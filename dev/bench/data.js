window.BENCHMARK_DATA = {
  "lastUpdate": 1742784275722,
  "repoUrl": "https://github.com/lemon-mint/hsq",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "2d8c7714dba77a1e484de797ee77398b4eb79823",
          "message": "Refactor benchmark command to target correct\npackage directory\n\nAdjusted the benchmark command to target the correct package directory\nfor off-heap ring, ensuring accurate benchmark results. This change\nresolves the issue of incorrect benchmark data. No related issues.",
          "timestamp": "2023-12-19T10:22:23+09:00",
          "tree_id": "079f3364b30d40a31e76172078ba3a2bd63f5a35",
          "url": "https://github.com/lemon-mint/hsq/commit/2d8c7714dba77a1e484de797ee77398b4eb79823"
        },
        "date": 1702949133926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.09,
            "unit": "ns/op",
            "extra": "422097289 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "422097289 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "422097289 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "89a422e58d931927050c0c7e6e7fb0d976741523",
          "message": "Refactor README.md for clarity and structure\n\nReformatted README.md to improve readability and organization. Updated\nthe header and section headings to provide clearer information for\nreaders. No issues fixed.",
          "timestamp": "2023-12-19T10:46:05+09:00",
          "tree_id": "c008890cf0e9c3c6fbed381ea894ed597378f37d",
          "url": "https://github.com/lemon-mint/hsq/commit/89a422e58d931927050c0c7e6e7fb0d976741523"
        },
        "date": 1702950399525,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.85,
            "unit": "ns/op",
            "extra": "440524844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "440524844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "440524844 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "89a422e58d931927050c0c7e6e7fb0d976741523",
          "message": "Refactor README.md for clarity and structure\n\nReformatted README.md to improve readability and organization. Updated\nthe header and section headings to provide clearer information for\nreaders. No issues fixed.",
          "timestamp": "2023-12-19T01:46:05Z",
          "url": "https://github.com/lemon-mint/hsq/commit/89a422e58d931927050c0c7e6e7fb0d976741523"
        },
        "date": 1702952783556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.59,
            "unit": "ns/op",
            "extra": "420063208 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "420063208 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "420063208 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "1591646339767d1cee00227ddb4c3b127d30367e",
          "message": "Refactor Go benchmark configuration and remove\nunused code\n\nSimplify go test benchmark command, remove unused offheap/ring and mmap\nrelated code files, and their associated test files. This cleanup\nenhances code maintainability and reduces clutter. No issues addressed.",
          "timestamp": "2023-12-19T15:34:39+09:00",
          "tree_id": "529f9413b91168eb82e4ce70fbc83dd104ee3fd5",
          "url": "https://github.com/lemon-mint/hsq/commit/1591646339767d1cee00227ddb4c3b127d30367e"
        },
        "date": 1702967722992,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.77,
            "unit": "ns/op",
            "extra": "208729748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "208729748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "208729748 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T17:05:36+09:00",
          "tree_id": "fd74e6af38ed70606733022d454529980fc693b0",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1702973175514,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2693478,
            "unit": "ns/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 398640.47,
            "unit": "MB/s",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2176 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.45,
            "unit": "ns/op",
            "extra": "218588722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218588722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218588722 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T17:05:36+09:00",
          "tree_id": "fd74e6af38ed70606733022d454529980fc693b0",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1702973434263,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2744040,
            "unit": "ns/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 391295.16,
            "unit": "MB/s",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2071 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.04,
            "unit": "ns/op",
            "extra": "217659944 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217659944 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217659944 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703038803492,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2672273,
            "unit": "ns/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 401803.91,
            "unit": "MB/s",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.92,
            "unit": "ns/op",
            "extra": "215518468 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "215518468 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "215518468 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703125578147,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2727780,
            "unit": "ns/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 393627.61,
            "unit": "MB/s",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2227 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.01,
            "unit": "ns/op",
            "extra": "222661978 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222661978 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222661978 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703211962741,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2733897,
            "unit": "ns/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 392746.89,
            "unit": "MB/s",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 29.9,
            "unit": "ns/op",
            "extra": "204210376 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "204210376 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "204210376 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "be7400df6a51a4e1e514792d333d626ad03c6459",
          "message": "Refactor MPMC tests and introduce new test cases\n\nAdd tests for MPMC with uint8, complex128, and custom _chunk type,\nenhancing test coverage and ensuring correctness of the MPMC ring\nfunctionalities.",
          "timestamp": "2023-12-19T08:05:36Z",
          "url": "https://github.com/lemon-mint/hsq/commit/be7400df6a51a4e1e514792d333d626ad03c6459"
        },
        "date": 1703298303570,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2664262,
            "unit": "ns/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 403011.93,
            "unit": "MB/s",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.08,
            "unit": "ns/op",
            "extra": "222149556 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222149556 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222149556 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "distinct": true,
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T16:16:01+09:00",
          "tree_id": "10454f865dfe923fbddda147389ffa119e03ce27",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703315795441,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2937956,
            "unit": "ns/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365468.27,
            "unit": "MB/s",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.76,
            "unit": "ns/op",
            "extra": "220753610 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220753610 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220753610 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703384784658,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2945183,
            "unit": "ns/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364571.45,
            "unit": "MB/s",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.2,
            "unit": "ns/op",
            "extra": "227661878 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227661878 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227661878 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703471186032,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2938719,
            "unit": "ns/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365373.32,
            "unit": "MB/s",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2029 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.95,
            "unit": "ns/op",
            "extra": "222341650 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222341650 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222341650 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703557535942,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2942589,
            "unit": "ns/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364892.82,
            "unit": "MB/s",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2001 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.76,
            "unit": "ns/op",
            "extra": "207752643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "207752643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "207752643 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703643941925,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2909953,
            "unit": "ns/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368985.21,
            "unit": "MB/s",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.15,
            "unit": "ns/op",
            "extra": "223305056 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "223305056 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "223305056 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703730341859,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2926863,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366853.38,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.07,
            "unit": "ns/op",
            "extra": "229076932 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "229076932 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "229076932 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703816708225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2915405,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368295.16,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.23,
            "unit": "ns/op",
            "extra": "217965170 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217965170 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217965170 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703903149704,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2897419,
            "unit": "ns/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370581.36,
            "unit": "MB/s",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1836 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "221660600 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221660600 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221660600 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1703989597864,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2974239,
            "unit": "ns/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 361009.82,
            "unit": "MB/s",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1800 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.79,
            "unit": "ns/op",
            "extra": "226186088 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226186088 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226186088 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704076076668,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3000995,
            "unit": "ns/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 357791.23,
            "unit": "MB/s",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1724 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.49,
            "unit": "ns/op",
            "extra": "218186767 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218186767 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218186767 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704162388902,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2928780,
            "unit": "ns/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366613.21,
            "unit": "MB/s",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1906 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.86,
            "unit": "ns/op",
            "extra": "223846226 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "223846226 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "223846226 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704248766843,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2909200,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369080.74,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.38,
            "unit": "ns/op",
            "extra": "218257879 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218257879 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218257879 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704335173964,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2955370,
            "unit": "ns/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363314.74,
            "unit": "MB/s",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.79,
            "unit": "ns/op",
            "extra": "204668211 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "204668211 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "204668211 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704421596636,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2929569,
            "unit": "ns/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366514.46,
            "unit": "MB/s",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1972 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.11,
            "unit": "ns/op",
            "extra": "215665329 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "215665329 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "215665329 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704507951044,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3037080,
            "unit": "ns/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 353540.11,
            "unit": "MB/s",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1647 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.09,
            "unit": "ns/op",
            "extra": "221141455 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221141455 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221141455 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704594446262,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2961928,
            "unit": "ns/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 362510.31,
            "unit": "MB/s",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1736 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.86,
            "unit": "ns/op",
            "extra": "206668245 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "206668245 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "206668245 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704680822836,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2888711,
            "unit": "ns/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371698.52,
            "unit": "MB/s",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2020 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.83,
            "unit": "ns/op",
            "extra": "219689259 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "219689259 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "219689259 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704767227713,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2899359,
            "unit": "ns/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370333.45,
            "unit": "MB/s",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1976 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.6,
            "unit": "ns/op",
            "extra": "209250364 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "209250364 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "209250364 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704853624231,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3079218,
            "unit": "ns/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 348701.98,
            "unit": "MB/s",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1752 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.17,
            "unit": "ns/op",
            "extra": "218601748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218601748 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218601748 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1704940021917,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2893856,
            "unit": "ns/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371037.63,
            "unit": "MB/s",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 28.12,
            "unit": "ns/op",
            "extra": "212863599 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "212863599 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "212863599 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705026439729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2950819,
            "unit": "ns/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363875.05,
            "unit": "MB/s",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 25.94,
            "unit": "ns/op",
            "extra": "222702584 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "222702584 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "222702584 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705112791324,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2942976,
            "unit": "ns/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364844.82,
            "unit": "MB/s",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.15,
            "unit": "ns/op",
            "extra": "220019913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220019913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220019913 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705199259745,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2956027,
            "unit": "ns/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363234.03,
            "unit": "MB/s",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1912 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.33,
            "unit": "ns/op",
            "extra": "218074852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218074852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218074852 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705285682017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2932023,
            "unit": "ns/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366207.7,
            "unit": "MB/s",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2059 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 29.03,
            "unit": "ns/op",
            "extra": "214286014 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "214286014 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "214286014 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705372019838,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2901452,
            "unit": "ns/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370066.29,
            "unit": "MB/s",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.34,
            "unit": "ns/op",
            "extra": "214414016 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "214414016 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "214414016 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705458441675,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2881088,
            "unit": "ns/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372681.99,
            "unit": "MB/s",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.84,
            "unit": "ns/op",
            "extra": "227683054 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227683054 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227683054 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705544837432,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2895443,
            "unit": "ns/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370834.26,
            "unit": "MB/s",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2120 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.11,
            "unit": "ns/op",
            "extra": "227395258 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227395258 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227395258 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705631244729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855877,
            "unit": "ns/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375971.89,
            "unit": "MB/s",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.89,
            "unit": "ns/op",
            "extra": "220747539 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220747539 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220747539 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705717603226,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2877695,
            "unit": "ns/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373121.37,
            "unit": "MB/s",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.77,
            "unit": "ns/op",
            "extra": "221871847 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221871847 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221871847 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705804077912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855543,
            "unit": "ns/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376015.91,
            "unit": "MB/s",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.84,
            "unit": "ns/op",
            "extra": "226012886 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226012886 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226012886 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705890499866,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2887102,
            "unit": "ns/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371905.68,
            "unit": "MB/s",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.12,
            "unit": "ns/op",
            "extra": "220371530 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "220371530 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "220371530 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1705976848005,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2874133,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373583.8,
            "unit": "MB/s",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.39,
            "unit": "ns/op",
            "extra": "217214125 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217214125 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217214125 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706063247539,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2881841,
            "unit": "ns/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372584.63,
            "unit": "MB/s",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.31,
            "unit": "ns/op",
            "extra": "217427406 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "217427406 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "217427406 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706149658944,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2845527,
            "unit": "ns/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377339.38,
            "unit": "MB/s",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.88,
            "unit": "ns/op",
            "extra": "216445233 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "216445233 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "216445233 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706235899672,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2979093,
            "unit": "ns/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 360421.67,
            "unit": "MB/s",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1881 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.18,
            "unit": "ns/op",
            "extra": "227302834 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "227302834 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "227302834 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706322197041,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2935439,
            "unit": "ns/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365781.6,
            "unit": "MB/s",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "225365613 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "225365613 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "225365613 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706408668467,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2886667,
            "unit": "ns/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371961.72,
            "unit": "MB/s",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2086 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.02,
            "unit": "ns/op",
            "extra": "235920822 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "235920822 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "235920822 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706495035461,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2852492,
            "unit": "ns/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376418.08,
            "unit": "MB/s",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1954 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.33,
            "unit": "ns/op",
            "extra": "228174004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "228174004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "228174004 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706581430459,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2860548,
            "unit": "ns/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375357.92,
            "unit": "MB/s",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.2,
            "unit": "ns/op",
            "extra": "221353699 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "221353699 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "221353699 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706667847083,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3396060,
            "unit": "ns/op",
            "extra": "1753 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 316169.21,
            "unit": "MB/s",
            "extra": "1753 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1753 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1753 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 30.18,
            "unit": "ns/op",
            "extra": "197569590 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "197569590 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "197569590 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706754333186,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2947078,
            "unit": "ns/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364336.98,
            "unit": "MB/s",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.39,
            "unit": "ns/op",
            "extra": "224307106 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "224307106 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "224307106 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706840642453,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2859162,
            "unit": "ns/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375539.89,
            "unit": "MB/s",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.8,
            "unit": "ns/op",
            "extra": "218504266 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "218504266 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "218504266 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1706926953375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2908248,
            "unit": "ns/op\t369201.49 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2908248,
            "unit": "ns/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369201.49,
            "unit": "MB/s",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2184 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 26.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226021938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.64,
            "unit": "ns/op",
            "extra": "226021938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226021938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226021938 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707013519855,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2867531,
            "unit": "ns/op\t374443.87 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2867531,
            "unit": "ns/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374443.87,
            "unit": "MB/s",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 26.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226686559 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.5,
            "unit": "ns/op",
            "extra": "226686559 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226686559 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226686559 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707099975637,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2871247,
            "unit": "ns/op\t373959.33 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2035 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2871247,
            "unit": "ns/op",
            "extra": "2035 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373959.33,
            "unit": "MB/s",
            "extra": "2035 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2035 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2035 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 27.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "226179216 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 27.59,
            "unit": "ns/op",
            "extra": "226179216 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "226179216 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "226179216 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707186237419,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2846766,
            "unit": "ns/op\t377175.16 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2056 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2846766,
            "unit": "ns/op",
            "extra": "2056 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377175.16,
            "unit": "MB/s",
            "extra": "2056 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2056 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2056 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 26.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "224541134 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.29,
            "unit": "ns/op",
            "extra": "224541134 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "224541134 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "224541134 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707272618446,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2842158,
            "unit": "ns/op\t377786.71 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2842158,
            "unit": "ns/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377786.71,
            "unit": "MB/s",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 26.98,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "223134463 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 26.98,
            "unit": "ns/op",
            "extra": "223134463 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "223134463 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "223134463 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707359047766,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2874378,
            "unit": "ns/op\t373551.91 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2874378,
            "unit": "ns/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373551.91,
            "unit": "MB/s",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275742144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.7,
            "unit": "ns/op",
            "extra": "275742144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "275742144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "275742144 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707445423340,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2855753,
            "unit": "ns/op\t375988.22 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855753,
            "unit": "ns/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375988.22,
            "unit": "MB/s",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.43,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276309262 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.43,
            "unit": "ns/op",
            "extra": "276309262 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276309262 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276309262 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707531796931,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2935356,
            "unit": "ns/op\t365791.87 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2935356,
            "unit": "ns/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365791.87,
            "unit": "MB/s",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275701627 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.92,
            "unit": "ns/op",
            "extra": "275701627 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "275701627 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "275701627 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707618299496,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2883545,
            "unit": "ns/op\t372364.46 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2883545,
            "unit": "ns/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372364.46,
            "unit": "MB/s",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1944 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284933373 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.68,
            "unit": "ns/op",
            "extra": "284933373 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284933373 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284933373 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707704660323,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2905005,
            "unit": "ns/op\t369613.60 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1856 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2905005,
            "unit": "ns/op",
            "extra": "1856 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369613.6,
            "unit": "MB/s",
            "extra": "1856 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1856 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1856 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282759789 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.6,
            "unit": "ns/op",
            "extra": "282759789 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282759789 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282759789 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707791034129,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2880680,
            "unit": "ns/op\t372734.72 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2880680,
            "unit": "ns/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372734.72,
            "unit": "MB/s",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276336844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.73,
            "unit": "ns/op",
            "extra": "276336844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276336844 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276336844 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707877445873,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2922893,
            "unit": "ns/op\t367351.59 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2076 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2922893,
            "unit": "ns/op",
            "extra": "2076 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 367351.59,
            "unit": "MB/s",
            "extra": "2076 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2076 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2076 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277431045 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.9,
            "unit": "ns/op",
            "extra": "277431045 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277431045 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277431045 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1707963878273,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2873445,
            "unit": "ns/op\t373673.31 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2873445,
            "unit": "ns/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373673.31,
            "unit": "MB/s",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273098842 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.89,
            "unit": "ns/op",
            "extra": "273098842 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "273098842 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "273098842 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708050245125,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2870923,
            "unit": "ns/op\t374001.45 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2870923,
            "unit": "ns/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374001.45,
            "unit": "MB/s",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1970 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "271974612 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.94,
            "unit": "ns/op",
            "extra": "271974612 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "271974612 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "271974612 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708136605493,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2869536,
            "unit": "ns/op\t374182.27 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2869536,
            "unit": "ns/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374182.27,
            "unit": "MB/s",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280894920 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.38,
            "unit": "ns/op",
            "extra": "280894920 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280894920 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280894920 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708223065067,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2910521,
            "unit": "ns/op\t368913.23 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2910521,
            "unit": "ns/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368913.23,
            "unit": "MB/s",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2088 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 22.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277515831 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 22.08,
            "unit": "ns/op",
            "extra": "277515831 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277515831 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277515831 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708309473670,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2866259,
            "unit": "ns/op\t374610.05 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1986 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2866259,
            "unit": "ns/op",
            "extra": "1986 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374610.05,
            "unit": "MB/s",
            "extra": "1986 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1986 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1986 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279917292 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.46,
            "unit": "ns/op",
            "extra": "279917292 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "279917292 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "279917292 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708395812538,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2901956,
            "unit": "ns/op\t370002.02 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2901956,
            "unit": "ns/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370002.02,
            "unit": "MB/s",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2140 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "266126288 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.78,
            "unit": "ns/op",
            "extra": "266126288 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "266126288 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "266126288 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708482233920,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2927973,
            "unit": "ns/op\t366714.24 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2927973,
            "unit": "ns/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366714.24,
            "unit": "MB/s",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276686731 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.58,
            "unit": "ns/op",
            "extra": "276686731 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276686731 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276686731 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708568634307,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2864165,
            "unit": "ns/op\t374883.91 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2864165,
            "unit": "ns/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374883.91,
            "unit": "MB/s",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281090294 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.7,
            "unit": "ns/op",
            "extra": "281090294 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281090294 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281090294 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708655049188,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2901265,
            "unit": "ns/op\t370090.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2901265,
            "unit": "ns/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370090.13,
            "unit": "MB/s",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277287625 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.66,
            "unit": "ns/op",
            "extra": "277287625 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277287625 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277287625 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708741352125,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2863870,
            "unit": "ns/op\t374922.60 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2024 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2863870,
            "unit": "ns/op",
            "extra": "2024 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374922.6,
            "unit": "MB/s",
            "extra": "2024 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2024 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2024 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280079814 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.46,
            "unit": "ns/op",
            "extra": "280079814 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280079814 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280079814 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708827891130,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2876543,
            "unit": "ns/op\t373270.86 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2876543,
            "unit": "ns/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373270.86,
            "unit": "MB/s",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2128 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278752372 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.76,
            "unit": "ns/op",
            "extra": "278752372 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278752372 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278752372 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1708914318647,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2875368,
            "unit": "ns/op\t373423.37 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2875368,
            "unit": "ns/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373423.37,
            "unit": "MB/s",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2084 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277313108 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.5,
            "unit": "ns/op",
            "extra": "277313108 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277313108 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277313108 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709000614730,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2903136,
            "unit": "ns/op\t369851.59 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2903136,
            "unit": "ns/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369851.59,
            "unit": "MB/s",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277567155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.42,
            "unit": "ns/op",
            "extra": "277567155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277567155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277567155 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709087074577,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2918931,
            "unit": "ns/op\t367850.25 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2005 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2918931,
            "unit": "ns/op",
            "extra": "2005 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 367850.25,
            "unit": "MB/s",
            "extra": "2005 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2005 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2005 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276400602 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.85,
            "unit": "ns/op",
            "extra": "276400602 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276400602 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276400602 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709173425986,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2940388,
            "unit": "ns/op\t365165.95 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2940388,
            "unit": "ns/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365165.95,
            "unit": "MB/s",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275139938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.76,
            "unit": "ns/op",
            "extra": "275139938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "275139938 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "275139938 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709259930272,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2875767,
            "unit": "ns/op\t373371.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2875767,
            "unit": "ns/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373371.56,
            "unit": "MB/s",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1945 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283851504 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.69,
            "unit": "ns/op",
            "extra": "283851504 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "283851504 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "283851504 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709346182910,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2903412,
            "unit": "ns/op\t369816.50 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2055 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2903412,
            "unit": "ns/op",
            "extra": "2055 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369816.5,
            "unit": "MB/s",
            "extra": "2055 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2055 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2055 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281436603 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.19,
            "unit": "ns/op",
            "extra": "281436603 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281436603 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281436603 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709432676175,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 3017836,
            "unit": "ns/op\t355794.56 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3017836,
            "unit": "ns/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 355794.56,
            "unit": "MB/s",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1909 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280820118 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.44,
            "unit": "ns/op",
            "extra": "280820118 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280820118 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280820118 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709520253870,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2943568,
            "unit": "ns/op\t364771.48 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1720 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2943568,
            "unit": "ns/op",
            "extra": "1720 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364771.48,
            "unit": "MB/s",
            "extra": "1720 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1720 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1720 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278121322 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.54,
            "unit": "ns/op",
            "extra": "278121322 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278121322 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278121322 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709605443762,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2916202,
            "unit": "ns/op\t368194.55 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2916202,
            "unit": "ns/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368194.55,
            "unit": "MB/s",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288134144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.39,
            "unit": "ns/op",
            "extra": "288134144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288134144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288134144 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709691827496,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2879328,
            "unit": "ns/op\t372909.82 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2879328,
            "unit": "ns/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372909.82,
            "unit": "MB/s",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "286136928 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.42,
            "unit": "ns/op",
            "extra": "286136928 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "286136928 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "286136928 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709778050085,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2933713,
            "unit": "ns/op\t365996.76 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2933713,
            "unit": "ns/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365996.76,
            "unit": "MB/s",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278069394 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.21,
            "unit": "ns/op",
            "extra": "278069394 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278069394 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278069394 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709864711909,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2874308,
            "unit": "ns/op\t373561.06 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2052 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2874308,
            "unit": "ns/op",
            "extra": "2052 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373561.06,
            "unit": "MB/s",
            "extra": "2052 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2052 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2052 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283627206 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.1,
            "unit": "ns/op",
            "extra": "283627206 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "283627206 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "283627206 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1709950955827,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2968779,
            "unit": "ns/op\t361673.77 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2968779,
            "unit": "ns/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 361673.77,
            "unit": "MB/s",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284700574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.11,
            "unit": "ns/op",
            "extra": "284700574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284700574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284700574 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710037535944,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2910650,
            "unit": "ns/op\t368896.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1882 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2910650,
            "unit": "ns/op",
            "extra": "1882 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368896.81,
            "unit": "MB/s",
            "extra": "1882 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1882 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1882 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288154666 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21,
            "unit": "ns/op",
            "extra": "288154666 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288154666 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288154666 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710123923913,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2954780,
            "unit": "ns/op\t363387.34 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2954780,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363387.34,
            "unit": "MB/s",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280496188 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.39,
            "unit": "ns/op",
            "extra": "280496188 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280496188 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280496188 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710210235535,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2870576,
            "unit": "ns/op\t374046.76 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2002 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2870576,
            "unit": "ns/op",
            "extra": "2002 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374046.76,
            "unit": "MB/s",
            "extra": "2002 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2002 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2002 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "291368013 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.72,
            "unit": "ns/op",
            "extra": "291368013 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "291368013 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291368013 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710296697043,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 3020481,
            "unit": "ns/op\t355482.94 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3020481,
            "unit": "ns/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 355482.94,
            "unit": "MB/s",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290876557 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.61,
            "unit": "ns/op",
            "extra": "290876557 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290876557 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290876557 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710383034633,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2972925,
            "unit": "ns/op\t361169.42 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2972925,
            "unit": "ns/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 361169.42,
            "unit": "MB/s",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276432175 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.03,
            "unit": "ns/op",
            "extra": "276432175 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276432175 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276432175 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710469467923,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2965266,
            "unit": "ns/op\t362102.29 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2965266,
            "unit": "ns/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 362102.29,
            "unit": "MB/s",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292786533 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.72,
            "unit": "ns/op",
            "extra": "292786533 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292786533 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292786533 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710555826153,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2887495,
            "unit": "ns/op\t371855.04 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2034 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2887495,
            "unit": "ns/op",
            "extra": "2034 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371855.04,
            "unit": "MB/s",
            "extra": "2034 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2034 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2034 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288011812 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.79,
            "unit": "ns/op",
            "extra": "288011812 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288011812 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288011812 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710642269651,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2924107,
            "unit": "ns/op\t367199.18 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1792 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2924107,
            "unit": "ns/op",
            "extra": "1792 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 367199.18,
            "unit": "MB/s",
            "extra": "1792 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1792 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1792 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.11,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "291369574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.11,
            "unit": "ns/op",
            "extra": "291369574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "291369574 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291369574 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710749402818,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2770722,
            "unit": "ns/op\t387527.04 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2770722,
            "unit": "ns/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 387527.04,
            "unit": "MB/s",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2095 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287899594 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.79,
            "unit": "ns/op",
            "extra": "287899594 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287899594 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287899594 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710815037867,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2916201,
            "unit": "ns/op\t368194.60 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2013 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2916201,
            "unit": "ns/op",
            "extra": "2013 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368194.6,
            "unit": "MB/s",
            "extra": "2013 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2013 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2013 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287390643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.75,
            "unit": "ns/op",
            "extra": "287390643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287390643 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287390643 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710901433543,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2919358,
            "unit": "ns/op\t367796.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2919358,
            "unit": "ns/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 367796.46,
            "unit": "MB/s",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281808238 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.86,
            "unit": "ns/op",
            "extra": "281808238 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281808238 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281808238 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1710987902004,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2915659,
            "unit": "ns/op\t368263.13 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2915659,
            "unit": "ns/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 368263.13,
            "unit": "MB/s",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287230800 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "287230800 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287230800 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287230800 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711074255927,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2942745,
            "unit": "ns/op\t364873.46 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1908 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2942745,
            "unit": "ns/op",
            "extra": "1908 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 364873.46,
            "unit": "MB/s",
            "extra": "1908 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1908 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1908 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.88,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289106739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.88,
            "unit": "ns/op",
            "extra": "289106739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289106739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289106739 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711160636729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2823433,
            "unit": "ns/op\t380292.16 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2823433,
            "unit": "ns/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380292.16,
            "unit": "MB/s",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1988 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290441104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.73,
            "unit": "ns/op",
            "extra": "290441104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290441104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290441104 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711247134490,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2938563,
            "unit": "ns/op\t365392.69 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2938563,
            "unit": "ns/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365392.69,
            "unit": "MB/s",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287228888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.96,
            "unit": "ns/op",
            "extra": "287228888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287228888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287228888 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711333515816,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2937317,
            "unit": "ns/op\t365547.71 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1899 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2937317,
            "unit": "ns/op",
            "extra": "1899 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 365547.71,
            "unit": "MB/s",
            "extra": "1899 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1899 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1899 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "286424750 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.12,
            "unit": "ns/op",
            "extra": "286424750 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "286424750 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "286424750 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711419941709,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2955806,
            "unit": "ns/op\t363261.13 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2022 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2955806,
            "unit": "ns/op",
            "extra": "2022 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363261.13,
            "unit": "MB/s",
            "extra": "2022 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2022 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2022 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287601868 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.4,
            "unit": "ns/op",
            "extra": "287601868 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287601868 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287601868 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711506253123,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2994770,
            "unit": "ns/op\t358534.91 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2994770,
            "unit": "ns/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 358534.91,
            "unit": "MB/s",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1983 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.31,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281959082 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.31,
            "unit": "ns/op",
            "extra": "281959082 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281959082 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281959082 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "id": "e060f1373c6108ab474b70ca70660ac81bb1204f",
          "message": "Refactor: Update BufferRing benchmark for accuracy",
          "timestamp": "2023-12-23T07:16:01Z",
          "url": "https://github.com/lemon-mint/hsq/commit/e060f1373c6108ab474b70ca70660ac81bb1204f"
        },
        "date": 1711592737135,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2907275,
            "unit": "ns/op\t369325.06 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2907275,
            "unit": "ns/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 369325.06,
            "unit": "MB/s",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287395858 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.26,
            "unit": "ns/op",
            "extra": "287395858 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287395858 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287395858 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1736855672370,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2844192,
            "unit": "ns/op\t377516.53 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2844192,
            "unit": "ns/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377516.53,
            "unit": "MB/s",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290904232 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.76,
            "unit": "ns/op",
            "extra": "290904232 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290904232 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290904232 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1736908580575,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2839360,
            "unit": "ns/op\t378158.94 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2839360,
            "unit": "ns/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378158.94,
            "unit": "MB/s",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284606982 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.1,
            "unit": "ns/op",
            "extra": "284606982 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284606982 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284606982 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1736994938727,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2800692,
            "unit": "ns/op\t383380.04 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2800692,
            "unit": "ns/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 383380.04,
            "unit": "MB/s",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287276415 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "287276415 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287276415 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287276415 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737081314616,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2814051,
            "unit": "ns/op\t381560.13 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2814051,
            "unit": "ns/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 381560.13,
            "unit": "MB/s",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288678224 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.72,
            "unit": "ns/op",
            "extra": "288678224 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288678224 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288678224 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737167578119,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2955539,
            "unit": "ns/op\t363294.04 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2955539,
            "unit": "ns/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 363294.04,
            "unit": "MB/s",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1725 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "298329307 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.57,
            "unit": "ns/op",
            "extra": "298329307 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "298329307 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "298329307 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737254401699,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2802844,
            "unit": "ns/op\t383085.76 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2802844,
            "unit": "ns/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 383085.76,
            "unit": "MB/s",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2107 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287015922 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.64,
            "unit": "ns/op",
            "extra": "287015922 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287015922 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287015922 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737340680658,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2841581,
            "unit": "ns/op\t377863.46 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2841581,
            "unit": "ns/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377863.46,
            "unit": "MB/s",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.76,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "293697848 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.76,
            "unit": "ns/op",
            "extra": "293697848 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "293697848 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "293697848 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737426983697,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2845763,
            "unit": "ns/op\t377308.08 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2845763,
            "unit": "ns/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377308.08,
            "unit": "MB/s",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281459998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.95,
            "unit": "ns/op",
            "extra": "281459998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281459998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281459998 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737513503340,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2859278,
            "unit": "ns/op\t375524.73 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2082 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2859278,
            "unit": "ns/op",
            "extra": "2082 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375524.73,
            "unit": "MB/s",
            "extra": "2082 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2082 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2082 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "293415756 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.4,
            "unit": "ns/op",
            "extra": "293415756 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "293415756 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "293415756 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737599793590,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2930963,
            "unit": "ns/op\t366340.16 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2032 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2930963,
            "unit": "ns/op",
            "extra": "2032 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 366340.16,
            "unit": "MB/s",
            "extra": "2032 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2032 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2032 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "285967747 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.8,
            "unit": "ns/op",
            "extra": "285967747 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "285967747 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "285967747 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737686199275,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2837970,
            "unit": "ns/op\t378344.26 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2112 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2837970,
            "unit": "ns/op",
            "extra": "2112 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378344.26,
            "unit": "MB/s",
            "extra": "2112 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2112 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2112 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289294386 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.78,
            "unit": "ns/op",
            "extra": "289294386 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289294386 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289294386 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737772368266,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2871094,
            "unit": "ns/op\t373979.18 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1932 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2871094,
            "unit": "ns/op",
            "extra": "1932 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373979.18,
            "unit": "MB/s",
            "extra": "1932 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1932 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1932 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.04,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281602435 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.04,
            "unit": "ns/op",
            "extra": "281602435 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281602435 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281602435 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737859071221,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2822664,
            "unit": "ns/op\t380395.83 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2822664,
            "unit": "ns/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380395.83,
            "unit": "MB/s",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2077 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "291168144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.89,
            "unit": "ns/op",
            "extra": "291168144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "291168144 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291168144 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1737945455461,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2834566,
            "unit": "ns/op\t378798.61 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2834566,
            "unit": "ns/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378798.61,
            "unit": "MB/s",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1790 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "285440744 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.1,
            "unit": "ns/op",
            "extra": "285440744 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "285440744 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "285440744 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738031759045,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2777030,
            "unit": "ns/op\t386646.72 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2777030,
            "unit": "ns/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 386646.72,
            "unit": "MB/s",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289352270 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.37,
            "unit": "ns/op",
            "extra": "289352270 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289352270 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289352270 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738118126125,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2765271,
            "unit": "ns/op\t388290.89 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2765271,
            "unit": "ns/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 388290.89,
            "unit": "MB/s",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292618228 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.78,
            "unit": "ns/op",
            "extra": "292618228 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292618228 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292618228 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738204472962,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2831504,
            "unit": "ns/op\t379208.15 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2831504,
            "unit": "ns/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379208.15,
            "unit": "MB/s",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288382546 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.85,
            "unit": "ns/op",
            "extra": "288382546 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288382546 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288382546 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738290962295,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2779865,
            "unit": "ns/op\t386252.39 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2779865,
            "unit": "ns/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 386252.39,
            "unit": "MB/s",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2046 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289057690 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.78,
            "unit": "ns/op",
            "extra": "289057690 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "289057690 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "289057690 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738377531280,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2828241,
            "unit": "ns/op\t379645.64 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2828241,
            "unit": "ns/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379645.64,
            "unit": "MB/s",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1873 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292869770 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.92,
            "unit": "ns/op",
            "extra": "292869770 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292869770 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292869770 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738463871103,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2782296,
            "unit": "ns/op\t385914.91 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2782296,
            "unit": "ns/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 385914.91,
            "unit": "MB/s",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290420810 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.62,
            "unit": "ns/op",
            "extra": "290420810 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290420810 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290420810 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738550209559,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2859080,
            "unit": "ns/op\t375550.69 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2859080,
            "unit": "ns/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375550.69,
            "unit": "MB/s",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "287747209 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.97,
            "unit": "ns/op",
            "extra": "287747209 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "287747209 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "287747209 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738636572828,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2959465,
            "unit": "ns/op\t362812.09 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2959465,
            "unit": "ns/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 362812.09,
            "unit": "MB/s",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "291959719 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.77,
            "unit": "ns/op",
            "extra": "291959719 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "291959719 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291959719 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738723059034,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2858389,
            "unit": "ns/op\t375641.50 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1843 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2858389,
            "unit": "ns/op",
            "extra": "1843 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375641.5,
            "unit": "MB/s",
            "extra": "1843 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1843 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1843 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.93,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288212431 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.93,
            "unit": "ns/op",
            "extra": "288212431 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288212431 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288212431 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738809490908,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2811333,
            "unit": "ns/op\t381928.97 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2811333,
            "unit": "ns/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 381928.97,
            "unit": "MB/s",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.15,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288232935 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.15,
            "unit": "ns/op",
            "extra": "288232935 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "288232935 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "288232935 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738895928972,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2837429,
            "unit": "ns/op\t378416.31 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2837429,
            "unit": "ns/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378416.31,
            "unit": "MB/s",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2058 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282006852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.72,
            "unit": "ns/op",
            "extra": "282006852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282006852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282006852 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1738982101570,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2828126,
            "unit": "ns/op\t379661.12 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2828126,
            "unit": "ns/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379661.12,
            "unit": "MB/s",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290870887 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.32,
            "unit": "ns/op",
            "extra": "290870887 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290870887 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290870887 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739068786421,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2824589,
            "unit": "ns/op\t380136.51 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1947 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2824589,
            "unit": "ns/op",
            "extra": "1947 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380136.51,
            "unit": "MB/s",
            "extra": "1947 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1947 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1947 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "292905314 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.7,
            "unit": "ns/op",
            "extra": "292905314 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "292905314 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "292905314 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739155164743,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2801929,
            "unit": "ns/op\t383210.80 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1980 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2801929,
            "unit": "ns/op",
            "extra": "1980 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 383210.8,
            "unit": "MB/s",
            "extra": "1980 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1980 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1980 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "295172480 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.05,
            "unit": "ns/op",
            "extra": "295172480 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "295172480 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "295172480 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739241552540,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2825530,
            "unit": "ns/op\t380010.01 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2825530,
            "unit": "ns/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380010.01,
            "unit": "MB/s",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "291170155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.51,
            "unit": "ns/op",
            "extra": "291170155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "291170155 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291170155 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739327878298,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2825647,
            "unit": "ns/op\t379994.17 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2825647,
            "unit": "ns/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379994.17,
            "unit": "MB/s",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1905 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "290144888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.57,
            "unit": "ns/op",
            "extra": "290144888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "290144888 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "290144888 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739414331532,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2801417,
            "unit": "ns/op\t383280.82 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2801417,
            "unit": "ns/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 383280.82,
            "unit": "MB/s",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2114 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 23.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280494031 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 23.37,
            "unit": "ns/op",
            "extra": "280494031 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280494031 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280494031 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739500712603,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2744043,
            "unit": "ns/op\t391294.69 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2744043,
            "unit": "ns/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 391294.69,
            "unit": "MB/s",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284987005 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.36,
            "unit": "ns/op",
            "extra": "284987005 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284987005 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284987005 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739587051964,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2867678,
            "unit": "ns/op\t374424.69 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2867678,
            "unit": "ns/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374424.69,
            "unit": "MB/s",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283122026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.94,
            "unit": "ns/op",
            "extra": "283122026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "283122026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "283122026 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739673681049,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2866702,
            "unit": "ns/op\t374552.20 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2866702,
            "unit": "ns/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374552.2,
            "unit": "MB/s",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1911 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279159738 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.79,
            "unit": "ns/op",
            "extra": "279159738 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "279159738 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "279159738 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739760060677,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2799944,
            "unit": "ns/op\t383482.51 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2127 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2799944,
            "unit": "ns/op",
            "extra": "2127 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 383482.51,
            "unit": "MB/s",
            "extra": "2127 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2127 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2127 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283404025 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "283404025 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "283404025 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "283404025 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739846268319,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2842034,
            "unit": "ns/op\t377803.19 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2842034,
            "unit": "ns/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377803.19,
            "unit": "MB/s",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282176913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.17,
            "unit": "ns/op",
            "extra": "282176913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282176913 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282176913 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1739932738897,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2860849,
            "unit": "ns/op\t375318.48 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2115 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2860849,
            "unit": "ns/op",
            "extra": "2115 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375318.48,
            "unit": "MB/s",
            "extra": "2115 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2115 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2115 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278908954 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "278908954 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278908954 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278908954 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740019171631,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2780469,
            "unit": "ns/op\t386168.45 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2780469,
            "unit": "ns/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 386168.45,
            "unit": "MB/s",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282050181 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.95,
            "unit": "ns/op",
            "extra": "282050181 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282050181 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282050181 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740105602243,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2900733,
            "unit": "ns/op\t370157.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2121 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2900733,
            "unit": "ns/op",
            "extra": "2121 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 370157.98,
            "unit": "MB/s",
            "extra": "2121 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2121 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2121 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278095524 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.52,
            "unit": "ns/op",
            "extra": "278095524 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278095524 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278095524 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740191791342,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2829320,
            "unit": "ns/op\t379500.89 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1880 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2829320,
            "unit": "ns/op",
            "extra": "1880 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379500.89,
            "unit": "MB/s",
            "extra": "1880 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1880 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1880 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.14,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284452308 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.14,
            "unit": "ns/op",
            "extra": "284452308 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284452308 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284452308 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740278481760,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2782401,
            "unit": "ns/op\t385900.41 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2782401,
            "unit": "ns/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 385900.41,
            "unit": "MB/s",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2050 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281840824 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.16,
            "unit": "ns/op",
            "extra": "281840824 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281840824 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281840824 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740364898613,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2819951,
            "unit": "ns/op\t380761.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2819951,
            "unit": "ns/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380761.81,
            "unit": "MB/s",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2145 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281304570 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.62,
            "unit": "ns/op",
            "extra": "281304570 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281304570 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281304570 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740451261687,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2842183,
            "unit": "ns/op\t377783.37 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2842183,
            "unit": "ns/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377783.37,
            "unit": "MB/s",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281034766 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "281034766 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281034766 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281034766 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740537656689,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2813456,
            "unit": "ns/op\t381640.77 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2813456,
            "unit": "ns/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 381640.77,
            "unit": "MB/s",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2066 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280328906 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.12,
            "unit": "ns/op",
            "extra": "280328906 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280328906 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280328906 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740624081318,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2888360,
            "unit": "ns/op\t371743.70 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2888360,
            "unit": "ns/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371743.7,
            "unit": "MB/s",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1998 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280997074 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.61,
            "unit": "ns/op",
            "extra": "280997074 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280997074 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280997074 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740710494216,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2836354,
            "unit": "ns/op\t378559.78 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2836354,
            "unit": "ns/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378559.78,
            "unit": "MB/s",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277959378 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.51,
            "unit": "ns/op",
            "extra": "277959378 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277959378 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277959378 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740796954902,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2878865,
            "unit": "ns/op\t372969.73 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2878865,
            "unit": "ns/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 372969.73,
            "unit": "MB/s",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1814 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278900475 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.39,
            "unit": "ns/op",
            "extra": "278900475 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278900475 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278900475 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740883335601,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2831567,
            "unit": "ns/op\t379199.70 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2831567,
            "unit": "ns/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 379199.7,
            "unit": "MB/s",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "274520958 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.5,
            "unit": "ns/op",
            "extra": "274520958 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "274520958 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "274520958 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1740969720017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2893675,
            "unit": "ns/op\t371060.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2893675,
            "unit": "ns/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 371060.92,
            "unit": "MB/s",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.37,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280420138 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.37,
            "unit": "ns/op",
            "extra": "280420138 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280420138 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280420138 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741056104330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2855890,
            "unit": "ns/op\t375970.20 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1824 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2855890,
            "unit": "ns/op",
            "extra": "1824 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375970.2,
            "unit": "MB/s",
            "extra": "1824 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1824 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1824 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.97,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270219852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.97,
            "unit": "ns/op",
            "extra": "270219852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "270219852 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "270219852 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741142496938,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2866935,
            "unit": "ns/op\t374521.82 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2006 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2866935,
            "unit": "ns/op",
            "extra": "2006 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 374521.82,
            "unit": "MB/s",
            "extra": "2006 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2006 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2006 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "278548645 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.34,
            "unit": "ns/op",
            "extra": "278548645 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "278548645 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "278548645 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741228922535,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2853617,
            "unit": "ns/op\t376269.66 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2853617,
            "unit": "ns/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376269.66,
            "unit": "MB/s",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1977 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.27,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281759202 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.27,
            "unit": "ns/op",
            "extra": "281759202 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281759202 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281759202 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741315326217,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2876755,
            "unit": "ns/op\t373243.27 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2876755,
            "unit": "ns/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 373243.27,
            "unit": "MB/s",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2018 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283026739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.13,
            "unit": "ns/op",
            "extra": "283026739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "283026739 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "283026739 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741400847082,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2795452,
            "unit": "ns/op\t384098.69 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1994 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2795452,
            "unit": "ns/op",
            "extra": "1994 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 384098.69,
            "unit": "MB/s",
            "extra": "1994 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1994 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1994 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.56,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277202751 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.56,
            "unit": "ns/op",
            "extra": "277202751 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "277202751 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "277202751 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741487316525,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2834613,
            "unit": "ns/op\t378792.26 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2834613,
            "unit": "ns/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378792.26,
            "unit": "MB/s",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2134 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281460476 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.41,
            "unit": "ns/op",
            "extra": "281460476 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "281460476 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "281460476 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741573725816,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2852128,
            "unit": "ns/op\t376466.11 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2852128,
            "unit": "ns/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376466.11,
            "unit": "MB/s",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1806 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282837558 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.25,
            "unit": "ns/op",
            "extra": "282837558 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282837558 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282837558 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741660930661,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2815531,
            "unit": "ns/op\t381359.54 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2815531,
            "unit": "ns/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 381359.54,
            "unit": "MB/s",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280390605 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.22,
            "unit": "ns/op",
            "extra": "280390605 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280390605 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280390605 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741747310782,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2794057,
            "unit": "ns/op\t384290.45 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2794057,
            "unit": "ns/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 384290.45,
            "unit": "MB/s",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2137 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280675578 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.47,
            "unit": "ns/op",
            "extra": "280675578 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280675578 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280675578 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0d19cd3d83012ea0b668aa3d928690b6cfc3a277",
          "message": "Update go_bench.yml",
          "timestamp": "2025-01-13T06:11:55Z",
          "url": "https://github.com/lemon-mint/hsq/commit/0d19cd3d83012ea0b668aa3d928690b6cfc3a277"
        },
        "date": 1741833751070,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2788031,
            "unit": "ns/op\t385121.07 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2788031,
            "unit": "ns/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 385121.07,
            "unit": "MB/s",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2031 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280753293 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.22,
            "unit": "ns/op",
            "extra": "280753293 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280753293 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280753293 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ice.lemons.mint@gmail.com",
            "name": "lemon-mint",
            "username": "lemon-mint"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-14T04:48:44+09:00",
          "tree_id": "9fdb4dcea35667a6dc7ac015206b3cdcfd119084",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1741895361732,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2807103,
            "unit": "ns/op\t382504.55 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1902 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2807103,
            "unit": "ns/op",
            "extra": "1902 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 382504.55,
            "unit": "MB/s",
            "extra": "1902 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1902 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1902 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282092026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "282092026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282092026 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282092026 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1741920104809,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2835327,
            "unit": "ns/op\t378696.92 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2835327,
            "unit": "ns/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378696.92,
            "unit": "MB/s",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2000 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282513177 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.42,
            "unit": "ns/op",
            "extra": "282513177 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282513177 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282513177 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742006461297,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2815818,
            "unit": "ns/op\t381320.59 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2815818,
            "unit": "ns/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 381320.59,
            "unit": "MB/s",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1956 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.28,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "276890104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.28,
            "unit": "ns/op",
            "extra": "276890104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "276890104 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "276890104 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742093010740,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 3073020,
            "unit": "ns/op\t349405.37 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1717 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 3073020,
            "unit": "ns/op",
            "extra": "1717 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 349405.37,
            "unit": "MB/s",
            "extra": "1717 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1717 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1717 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280055624 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.59,
            "unit": "ns/op",
            "extra": "280055624 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280055624 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280055624 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742098715102,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2852126,
            "unit": "ns/op\t376466.39 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2852126,
            "unit": "ns/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376466.39,
            "unit": "MB/s",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1948 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "272485927 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "272485927 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "272485927 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "272485927 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742179396079,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2823710,
            "unit": "ns/op\t380254.90 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2823710,
            "unit": "ns/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380254.9,
            "unit": "MB/s",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280391007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.25,
            "unit": "ns/op",
            "extra": "280391007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280391007 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280391007 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742265782721,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2848724,
            "unit": "ns/op\t376915.98 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2848724,
            "unit": "ns/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 376915.98,
            "unit": "MB/s",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2012 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.33,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280675912 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.33,
            "unit": "ns/op",
            "extra": "280675912 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280675912 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280675912 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742352161060,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2807508,
            "unit": "ns/op\t382449.32 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2807508,
            "unit": "ns/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 382449.32,
            "unit": "MB/s",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1978 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "285635234 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.23,
            "unit": "ns/op",
            "extra": "285635234 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "285635234 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "285635234 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742438536873,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2844717,
            "unit": "ns/op\t377446.84 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2844717,
            "unit": "ns/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377446.84,
            "unit": "MB/s",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2074 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279460392 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.55,
            "unit": "ns/op",
            "extra": "279460392 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "279460392 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "279460392 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742524973472,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2821068,
            "unit": "ns/op\t380610.96 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1918 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2821068,
            "unit": "ns/op",
            "extra": "1918 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380610.96,
            "unit": "MB/s",
            "extra": "1918 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1918 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1918 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 22.05,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284189004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 22.05,
            "unit": "ns/op",
            "extra": "284189004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284189004 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284189004 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742525128483,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2857643,
            "unit": "ns/op\t375739.55 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2109 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2857643,
            "unit": "ns/op",
            "extra": "2109 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 375739.55,
            "unit": "MB/s",
            "extra": "2109 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2109 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2109 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.03,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282818815 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.03,
            "unit": "ns/op",
            "extra": "282818815 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282818815 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282818815 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742611303024,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2838469,
            "unit": "ns/op\t378277.64 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2838469,
            "unit": "ns/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 378277.64,
            "unit": "MB/s",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "282216894 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.36,
            "unit": "ns/op",
            "extra": "282216894 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "282216894 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "282216894 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742697890754,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2821080,
            "unit": "ns/op\t380609.44 MB/s\t       1 B/op\t       0 allocs/op",
            "extra": "2110 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2821080,
            "unit": "ns/op",
            "extra": "2110 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 380609.44,
            "unit": "MB/s",
            "extra": "2110 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 1,
            "unit": "B/op",
            "extra": "2110 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2110 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 21.29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280995722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 21.29,
            "unit": "ns/op",
            "extra": "280995722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "280995722 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "280995722 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lemon-mint",
            "username": "lemon-mint",
            "email": "ice.lemons.mint@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d6321fa64150d48354e2e70baebd310b3f9c5dc9",
          "message": "Merge pull request #1 from snowmerak/main\n\nMake context-aware method and example",
          "timestamp": "2025-03-13T19:48:44Z",
          "url": "https://github.com/lemon-mint/hsq/commit/d6321fa64150d48354e2e70baebd310b3f9c5dc9"
        },
        "date": 1742784275097,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBufferRing",
            "value": 2844989,
            "unit": "ns/op\t377410.81 MB/s\t       0 B/op\t       0 allocs/op",
            "extra": "2064 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - ns/op",
            "value": 2844989,
            "unit": "ns/op",
            "extra": "2064 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - MB/s",
            "value": 377410.81,
            "unit": "MB/s",
            "extra": "2064 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "2064 times\n4 procs"
          },
          {
            "name": "BenchmarkBufferRing - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2064 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC",
            "value": 20.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284990420 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - ns/op",
            "value": 20.96,
            "unit": "ns/op",
            "extra": "284990420 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "284990420 times\n4 procs"
          },
          {
            "name": "BenchmarkMPMC - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "284990420 times\n4 procs"
          }
        ]
      }
    ]
  }
}