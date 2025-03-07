def solution(points, tokens):
    n = len(points)
    total_points = 0
    
    # Calculate points from token positions
    for i in range(n):
        if tokens[i] == 'T':
            total_points += points[i]
    
    # Calculate points from adjacent tokens
    for i in range(n-1):
        if tokens[i] == 'T' and tokens[i+1] == 'T':
            total_points += 1
            
    return total_points

# Test cases with output
print(solution([3, 4, 5, 2, 3], "TEETT"))  # Output: 9
print(solution([3, 2, 1, 2, 2], "ETTTE"))  # Output: 7
print(solution([2, 2, 2, 2], "TTTT"))      # Output: 11